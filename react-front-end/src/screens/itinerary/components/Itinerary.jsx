import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// @material-ui/core/components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../../components/Header/Header";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";
import ItineraryList from "./ItineraryList";
import styles from "../../../assets/jss/material-kit-react/views/itineraryPage";
import image from "../../../assets/img/vancouver-home2.jpg";
import Total from "./Total";
import "./itinerary.css";

// helpers
import getItinerary from "../helpers/getItinerary";

const useStyles = makeStyles(styles);


const Itinerary = (props) => {

  const params = useParams();

  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  let itineraryId = params.itineraryId;

  const [itineraries, setItineraries] = useState({});

  useEffect(()=> {
    getItinerary(itineraryId)
      .then(res => setItineraries(res))
      .catch(err => console.error(err.data));
  }, []);

  const classes = useStyles(props);

  let countrytravelling = params.country;
  let citytravelling = params.city;

  console.log(`Itinerary page: itineraryId: ${itineraryId}`)
  console.log(`Itinerary page: countrytravelling: ${countrytravelling}`)
  console.log(`Itinerary page: citytravelling: ${citytravelling}`)
  console.log(`Itinerary page: itineraries: ${JSON.stringify(itineraries)}`)


  const allActivitiesForTheTrip = Object.entries(itineraries).map(
    ([columnId, column]) => {
      return column;
    }
  );

  console.log(`Itinerary page: allActivitiesForTheTrip: ${allActivitiesForTheTrip}`)

  let total = 0;
  allActivitiesForTheTrip.forEach(day => {
    day.items.forEach(activity => {
      total += activity.price_cents / 100;
    });
  });

  return (
    <div className="itinerary-main">
      <Header
        color="transparent"
        fixed
        user={props.user}
        setUser={props.setUser}
      />

      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container} style={{ width: "1200px" }}>
          <GridContainer>
            <GridItem>
              <Card className={classes[cardAnimaton]} >
                <CardHeader color="info"
                  className={classes.cardHeader}
                  style={{background:"linear-gradient(to right bottom, #7F525D, #C4AEAD)", color: "black"}}>
                  <h2>Your Itinerary</h2>
                </CardHeader>
                <CardBody>
                  <div className="destination">
                    <h1>
                      {citytravelling}, {countrytravelling}
                    </h1>
                  </div>
                  <div className="activities-container">
                    {Object.entries(itineraries).map(([columnId, column]) => {
                      return (
                        <ItineraryList
                          key={columnId}
                          column={column}
                          itineraries={itineraries}
                        />
                      );
                    })}
                  </div>
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <strong><h3 style={{color:"#7D0552"}}> <Total total={total} /> </h3> </strong>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
