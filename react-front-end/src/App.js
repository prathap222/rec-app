import axios from "axios";
import './App.css';
import Navigation from './Navigation';
import TripPlan from "./components/TripPlan";
import useApplicationData from "./hooks/useApplicationData";
import AuthProvider from './providers/AuthProvider';


function App() {

  //objects fetched from the cumston hook useApplicationData
  const {
    state,
    // setDay,
    // bookInterview,
    // cancelInterview
  } = useApplicationData();


  const tripplan = {
    activity_id: 1
  };


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

    <section className="tripplan">

      < AuthProvider>
        <TripPlan
          tripplan={tripplan}
        />
      </AuthProvider>

    </section>

  </main>
  );
}

export default App;


//key="last" time="5pm"
