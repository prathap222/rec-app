import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import manageStates from "../helpers/manageStates";
import columnsFromBackend from "../helpers/columnsFromBackend";
import onDragEnd from "../helpers/onDragEnd";
import "./main.css";
import DndContext from "./DndContext";
import BudgetGuage from "./BudgetGuage";
import FormSection from "./FormSection";


import GMap from '../../../components/TheMainEvent/Map';
import Header from '../../../components/Header/Header';
import saveToLocal from '../helpers/saveToLocal';
import addCardList from '../helpers/addCardList'
import Button from '@material-ui/core/Button';
import AddDays from '@material-ui/icons/AddToPhotosOutlined';
import LeftArrow from '@material-ui/icons/Undo';
import RightArrow from '@material-ui/icons/Redo';


function Main(props) {

  const params = useParams();
  const city = params.city;
  const tripName = params.tripName;
  const tripId = params.tripId;

  console.log(`Main page: props: ${JSON.stringify(props)}`)
  console.log(`Main page: city: ${city}`)
  console.log(`Main page: tripName: ${tripName}`)
  console.log(`Main page: tripId: ${tripId}`)
  console.log(`Main page: params: ${JSON.stringify(params)}`)

  let budgetParam = !isNaN(params.budget) ? params.budget : 0;

  console.log(`Main page: params-budget: ${(params.budget)}`)
  console.log(`Main page: budgetParam: ${budgetParam}`)

// ---------- INITIALIZING THE STATE ------------------------------- //
  const [initialBudget, setInitialBudget] = useState(budgetParam);
  const [columns, setColumns] = useState(columnsFromBackend([]));
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [hoverActivity, setHoverActivity] = useState(null);
  const [latestActivity, setLatestActivity] = useState(null);

  const [activities, setActivities] = useState([])
  const [index, setIndex] = useState(2)


// ---------- USEEFFECT SECTION ----------------------------------- //
  useEffect(() => {
    let selectedActivities = [];
    for (let column in columns) {
      if (column !== "list") {
        if (columns[column].items.length) {
          setLatestActivity(columns[column].items[0].id);
          setTimeout(
            () =>
              setLatestActivity(prev =>
                prev === columns[column].items[0].id ? null : prev
              ),
            300
          );
        }
        selectedActivities = [...columns[column].items, ...selectedActivities];
      }
    }
    setSelectedActivity(selectedActivities);
  }, [columns]);

  let numOfColumns = Object.keys(columns).length;
  let lastItem = numOfColumns-1

  useEffect(() => {
    let newColumns = { ...columns };
    const keyArrays = Object.keys(newColumns);
    for (let column in newColumns) {
      let index = keyArrays.indexOf(column);
      if (column !== "list") {
        newColumns[column].name = `Day ${index}`;
      }
    }

    setColumns(newColumns)

    if(keyArrays.length-1<index) {
      setIndex(keyArrays.length-1)
    }

  },[numOfColumns])


  useEffect(()=>{

    manageStates(
      city,
      tripId,
      setColumns,
      columnsFromBackend,
      setActivities,
      setInitialBudget
      );
  }, []);

  let totalCost = 0;
  for (let column in columns) {
    if (column !== "list") {
      totalCost += columns[column].total;
    }
  }

  const budget = initialBudget-totalCost
  console.log(`Main page: computed budget: ${budget}`)

  return (
    <div className="main">
      <div>
        <Header
          color="transparent"
          fixed
          city={city}
          user={props.user}
          setUser={props.setUser}
          saveToLocal={saveToLocal}
          columns={columns}
          tripName={tripName}
          budget={initialBudget}
        />
      </div>

      {!isNaN(budget) ? (
        <div>
          {" "}
          {budget >= 0 ?
          (
            <BudgetGuage
              className="positive"
              budget={budget}
              initialBudget={initialBudget}
            >
              {" "}
              {`+$${budget}`}
            </BudgetGuage>
          ) :
          (
            <BudgetGuage
              className="negative"
              budget={budget}
              initialBudget={initialBudget}
            >
            {`-$${-budget}`}
            </BudgetGuage>
          )}
        </div>
      ) : (
        ""
      )}

      <div className="dnd-context">

        <DndContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
          budget={budget}
          columns={columns}
          setColumns={setColumns}
          totalCost={totalCost}
          setHoverActivity={setHoverActivity}
        />

      </div>

      <nav className='navi'>
        {numOfColumns>3?  <div className='slider'>
        <a href={
          `#${index}`
        }
          onClick={(e)=>{
          if(index===lastItem) {
            setIndex(index-2)
            return
          }
          if (index>1){
            setIndex(index-1)
            console.log(index)
          }
          }}>

          <Button className="day-arrows" >
           <LeftArrow style={{color:"white"}}/>
          </Button>

        </a>
        <a href={
          `#${index}`
        }
          onClick={(e)=>{
          if (index===1) {
            setIndex(index+2)
            return
          }
          if (index<lastItem){
            setIndex(index+1)
            console.log(index)
          }
          }}>

          <Button className="day-arrows" >
            <RightArrow style={{color:"white"}} />
          </Button>
          </a>
        </div>:""}

        <a  style={numOfColumns<=2?{right:'34vw',top:'55vh'}:{}} className='add-list' href={`#${lastItem}`} onClick={(()=>{
        addCardList(columns, setColumns)
        setIndex(lastItem)
        })}>

          <Button className="item-add">
            <AddDays style={{color:"white"}} />
          </Button>
        </a>

      </nav>

        <GMap
          initialCenter={activities}
          activities={selectedActivity}
          columns={columns}
          hoverActivity={hoverActivity}
          latestActivity={latestActivity}
        />
        {console.log(`Main page: initialBudget: ${initialBudget}`)}
        {console.log(`Main page: budget: ${budget}`)}
        {console.log(`Main page: columns: ${columns}`)}
        {console.log(`Main page: columns stringify: ${JSON.stringify(columns)}`)}

        <FormSection
          user={props.user}
          city={city}
          budget={initialBudget}
          setBudget={setInitialBudget}
          columns={columns}
          total={totalCost}
          tripId={tripId}
          tripName={tripName}
          />
    </div>
  );
}


export default Main;
