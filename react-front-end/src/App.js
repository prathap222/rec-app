import './App.css';
import Navigation from './Navigation';
import SideBar from './SideBar';
import TripPlan from "./components/TripPlan";
import useApplicationData from "./hooks/useApplicationData";
import { getAdventure, getMovies, getParks, getRestaurants} from './helpers/choices'

import PageSwProvider from './providers/PageSwProvider';
import { useEffect, useState } from "react";


function App() {

  //objects fetched from the cunston hook useApplicationData
  const {
    state
  } = useApplicationData();

  const [adventure, setAdventure] = useState([]);
  const [movie, setMovie] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [parks, setParks] = useState([]);

useEffect(() => {
  if (state.activities) {

    console.log("state.activities", state.activities);

    setAdventure(
      getAdventure(state.activities)
    )

    setMovie(
      getMovies(state.activities)
    )

    setRestaurant(
      getRestaurants(state.activities)
    )

    setParks(
      getParks(state.activities)
    )
  }

}, [state]);

console.log("adventure: ", adventure);
console.log("movie: ", movie);
console.log("restaurant: ", restaurant);
console.log("parks: ", parks);


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
