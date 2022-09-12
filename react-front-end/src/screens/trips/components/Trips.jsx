import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../../components/Header/Header";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import CardBody from "../../../components/Card/CardBody";

// core components
import styles from "../../../assets/jss/material-kit-react/views/tripItineraryPage";
import TripList from "./TripList";
import image from "../../../assets/img/chambar-restaurant.jpg";

//helpers
import getTrips from "../helpers/getTrips";

const useStyles = makeStyles(styles);

const Trips = props => {

  const navigate = useNavigate();
  const classes = useStyles();

  if (!props.user) {
    navigate({to: "/"})
  }

  const userId = props.user ? props.user.id : 0;

  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  const [trips, setTrips] = useState([]);

  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  useEffect(() => {
    getTrips(userId)
      .then(res => {
        setTrips(res.data)
      })
      .catch(err => console.error(err.data));
  }, [userId]);

  return (
    <div className="trip-main">
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
        <div className={classes.container} style={{ width: "700px"}}>
          <GridContainer>
            <GridItem>
              <Card className={classes[cardAnimaton]}>
                <CardHeader className={classes.cardHeader} style={{background:"linear-gradient(to right bottom, #7F525D, #C4AEAD)"}}>
                  <strong><h2>
                    {props.user
                      ? `Trips for ${props.user.name}`
                      : "Oopsie!!! No name? :("}
                  </h2></strong>
                </CardHeader>
                <CardBody style={{
                   padding:'10px 30px',
                   paddingBottom:'30px',
                   height:'55vh'}}>
                  <div>
                    {console.log(`Trips page: trips: ${JSON.stringify(trips)}`)}
                    {console.log(`Trips page: setTrips: ${setTrips}`)}
                    <TripList trips={trips} setTrips={setTrips} />
                  </div>
                </CardBody>

              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default Trips;
