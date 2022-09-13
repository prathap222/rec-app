import React from "react";

 import { Link, useNavigate } from "react-router-dom"

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import axios from 'axios';

// @material-ui/icons
import WanderLust from '@material-ui/icons/ExploreOutlined';
import Profile from '@material-ui/icons/PersonPinCircleOutlined';
import Logout from '@material-ui/icons/ExitToAppOutlined';

import saveToLocal from "../../screens/main/helpers/saveToLocal";

import styles from "../../assets/jss/material-kit-react/components/headerStyle";


const useStyles = makeStyles(styles);

export default function Header(props) {

  const navigate = useNavigate();
  const classes = useStyles();

  const logout = () => {
    axios.get("/logout")
    .then(res => {
      props.setUser(null);
      if (props.tripName) {
        navigate("/")
      }
    })
    .catch(e => console.error(e))
  }

  const user = props.user;

  const { color, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  return(

    <AppBar className={`nav-header ${appBarClasses}`}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bungee&family=Rubik+Maze&family=Source+Sans+Pro:ital,wght@0,300;0,600;1,300;1,600&display=swap');
      </style>
      <div className= {classes.flex}>
        <Button className={classes.title} component= { Link } to="/"
            style={{color: "#FFA07A", fontSize:"26px", fontFamily:"Rubik Maze"}}>
        <WanderLust style={{width:"35px", height:"35px"}} />WANDERLUST </Button>
      </div>
        {(user)?
        <div>
          <Button className={classes.title} onClick={()=>{navigate(`/trips/${user.name}`)}}>
            <Profile style={{width:"30px", height:"30px"}}/> {user.name}
          </Button>
          <Button className={classes.title} onClick={logout}>
          <Logout/>Logout
          </Button>
        </div>
          :
        <Button className={classes.title} onClick={()=>{
          if(props.columns) {
            saveToLocal(props.columns, props.budget)
          }

          }} component= { Link } to="/login">Login</Button>}
    </AppBar>
  )
}
