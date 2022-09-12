import React from "react";

 import { Link, useNavigate } from "react-router-dom"

import classNames from "classnames";
import PropTypes from "prop-types";

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
      <div className= {classes.flex}>
        <Button className={classes.title} component= { Link } to="/">
        <WanderLust />WANDERLUST </Button>
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

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};
