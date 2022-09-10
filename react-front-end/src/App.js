import axios from "axios";
import './App.css';
import Navigation from './Navigation';
import SideBar from './SideBar';
import TripPlan from "./components/TripPlan";
import useApplicationData from "./hooks/useApplicationData";
import { getAdventure, getMovies, getParks, getRestaurants} from './helpers/choices'

import PageSwProvider from './providers/PageSwProvider';


function App() {

  //objects fetched from the cunston hook useApplicationData
  const {
    state
  } = useApplicationData();

  // const user1 = state.users;
  const act1 = state.activities;
  // const city1 = state.cities;

console.log("act1.activities: ", act1.activities);

// console.log("array[0].activity_type: ", act1.activities[0].activity_type);

//   const adventureArr = getAdventure(act1.activities);

// console.log("adventureArr: ", adventureArr);

//   const movieArr = getMovies(act1.activities);
// console.log("movieArr: ", movieArr);

//   const restaurantArr = getRestaurants(act1.activities);
// console.log("restaurantArr: ", restaurantArr);

//   const parksArr = getParks(act1.activities);
// console.log("parksArr: ", parksArr);

  return (
    <main className="layout">

      <Navigation />

      <SideBar />

      <section className="tripplan">
        <PageSwProvider>
          <TripPlan
            // tripplan={adventureArr}

          />
        </PageSwProvider>
      </section>

    </main>
  );
}

export default App;


//key="last" time="5pm"
