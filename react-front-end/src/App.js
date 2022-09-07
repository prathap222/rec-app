import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navigation from './Navigation';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Welcome to Recreation App!!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    })
  }

  render() {
    const bStyle={
      backgroundImage: `url(../public/images/montreal-restaurant.jpg)`,
      // height:'100vh',
      // marginTop:'-70px',
      // fontSize:'50px',
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
    };

    return (
    <>
      <main className="layout">

      <Navigation />

      <section className="sidebar" style={bStyle}>

        {/* <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        /> */}


        {/* <hr className="sidebar__separator sidebar--centered" /> */}


        <nav className="sidebar__menu">
        {/* <DayList
          days={state.days}
          value={state.day}
          onChange={setDay}
        /> */}
        </nav>


        {/* <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        /> */}


      </section>

      <section className="schedule">

         {/* {!auth && <IniForm/>}
         {auth && <Info/>} */}

        {/* {schedule}
        <Appointment key="last" time="5pm" /> */}

      </section>

    </main>
    {/* <div className="App">
      <h1>{ this.state.message }</h1>
      <button onClick={this.fetchData} >
          Fetch Data
      </button>
    </div> */}
  </>
    );
  }
}

export default App;
