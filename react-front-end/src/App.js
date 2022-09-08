import './App.css';
import Navigation from './Navigation';
// import axios from "axios";

function App() {



  return (
    <main className="layout">

    <Navigation />

    <section className="sidebar" style={{backgroundImage: `url("images/montreal-restaurant.jpg")`}}>

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


      {/* {schedule}
      <Appointment key="last" time="5pm" /> */}

    </section>

  </main>
  );
}

export default App;
