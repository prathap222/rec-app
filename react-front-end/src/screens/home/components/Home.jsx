
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "../../../components/SearchBar/SearchBar";
 import Header from "../../../components/Header/Header";

import Parallax from "../../../components/Parallax/Parallax";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

import homePageStyle from "../../../assets/jss/material-kit-react/views/homePage";

const useStyles = makeStyles(homePageStyle);

const Home = props => {
  localStorage.removeItem("columns");
  const classes = useStyles();
  return (
    <div>
      {console.log(`Home page props: ${props}`)}
      {console.log(`Home:props.background: ${props.background}`)}
      {console.log(`Home:props.setBackGround: ${props.setBackGround}`)}
      <Header
        color="transparent"
        fixed
        user={props.user}
        setUser={props.setUser}
      />
      <Parallax className="background-transit" filter image={props.background}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <h1 className="intro-text">
                Lets explore around British Columbia!!!
              </h1>
              <br />
              <h4 className="action-text">
                What is your destination or budget?
              </h4>
              <SearchBar setBackGround={props.setBackGround} />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
