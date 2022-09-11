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
  // const [activityType, setActivityType] = useState(adventure);

useEffect(() => {
  if (state.activities) {
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

// console.log("adventure: ", adventure);
// console.log("movie: ", movie);
// console.log("restaurant: ", restaurant);
// console.log("parks: ", parks);

const activity_types = [adventure, movie, restaurant, parks];

  return (
    <main className="layout">

      <Navigation />

      <SideBar />

      <section className="tripplan">
        <PageSwProvider>
          <TripPlan
            activity_types={activity_types}

          />
        </PageSwProvider>
      </section>

    </main>
  );
}

export default App;
