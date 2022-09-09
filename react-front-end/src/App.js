import axios from "axios";
import './App.css';
import Navigation from './Navigation';
import TripPlan from "./components/TripPlan";
import useApplicationData from "./hooks/useApplicationData";
import AuthProvider from './providers/AuthProvider';
// import { authContext} from './providers/AuthProvider';
// import { useContext } from 'react';


function App() {

  //objects fetched from the cumston hook useApplicationData
  const {
    state,
    // setDay,
    // bookInterview,
    // cancelInterview
  } = useApplicationData();


  const tripplan = false;

console.log("hello, the activity is: ", tripplan.activity);

  // const { user } = useContext(authContext);


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

        {/* {user.email} */}
      </nav>


      {/* <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      /> */}


    </section>

    <section className="tripplan">
      <AuthProvider>

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
