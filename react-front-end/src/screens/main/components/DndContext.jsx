
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd'
import CardList from './CardList'

import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/DeleteOutline';

import deleteList from '../helpers/deleteList'

const DndContext = props => {
  return (

    <DragDropContext
      onDragEnd={props.onDragEnd}>

      <div className='days-container'>
      {Object.entries(props.columns).map(([columnId, column], index) => {
        if(columnId !== 'list'){
          return (
            <div
            className='column-container'
            key={columnId}
            >
              {console.log(`DndContxt page: budget: ${props.budget}`)}
              <div  className='column-name-container'>
                <h4  className='column-name' >{column.name}</h4>
                {columnId!=='list' && column.name!=='Day 1'?
                  <Button
                    onClick={()=>
                      deleteList(columnId, props.columns, props.setColumns)} >
                      <Delete style={{color:"red"}}/>
                  </Button>:""}
              </div>
              <div  id={index} className='outside-column'>
                <CardList
                droppableId={columnId}
                key={columnId}
                columnId={columnId}
                column={column}
                columns={props.columns}
                setColumns={props.setColumns}
                totalCost={props.totalCost}
                budget={props.budget}
                setHoverActivity={props.setHoverActivity}
                />
              </div>
            </div>
          );
        }
        return null;
      })}

      </div>
      <div className="column-container activity-list">
        <h2 className='list-name' >Places to Explore</h2>
        <div className="outside-column">
          <CardList
            droppableId="list"
            columnId={"list"}
            column={props.columns["list"]}
            columns={props.columns}
            setColumns={props.setColumns}
            totalCost={props.totalCost}
            budget={props.budget}
            setHoverActivity={props.setHoverActivity}

            />
          </div>


        </div>

   </DragDropContext>

  );
};

export default DndContext;
