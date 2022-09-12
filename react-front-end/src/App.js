import './App.css';
import Navigation from './Navigation';
import SideBar from './SideBar';
import TripPlan from "./components/TripPlan";
import useApplicationData from "./hooks/useApplicationData";
import { getAdventures, getMovies, getParks, getRestaurants} from './helpers/choices'

import PageSwProvider from './providers/PageSwProvider';
import { useEffect, useState } from "react";


function App() {

  //objects fetched from the cunston hook useApplicationData
  const {
    state
  } = useApplicationData();


  const [adventures, setAdventures] = useState([]);
  const [movies, setMovies] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [parks, setParks] = useState([]);

  useEffect(() => {
    if (state.activities) {
      setAdventures(
        getAdventures(state.activities)
      )

      setMovies(
        getMovies(state.activities)
      )

      setRestaurants(
        getRestaurants(state.activities)
      )

      setParks(
        getParks(state.activities)
      )
    }
  }, [state]);

  console.log("adventures: ", adventures);
  console.log("movies: ", movies);
  console.log("restaurants: ", restaurants);
  console.log("parks: ", parks);

  const [adventure, setAdventure] = useState({
    adventure: "Aquarium",
    adventures: []
  });

  const [movie, setMovie] = useState({
    movie: "Cineplex Odeon",
    movies: []
  });

  const [restaurant, setRestaurant] = useState({
    restaurant: "Chambar Restaurant",
    restaurants: []
  });

  const [park, setPark] = useState({
    park: "Capilano Suspension Bridge Park",
    parks: []
  });


  // console.log("adventures: ", adventure.adventures);
  // console.log("movies: ", movie.movies);
  // console.log("restaurants: ", restaurant.restaurants);
  // console.log("parks: ", park.parks);

  // const setAdv = adventure => setAdventure({ adventure });
  // const setMov = movie => setMovie({ movie });
  // const setRes = restaurant => setRestaurant({ restaurant });
  // const setPar = park => setPark({ park });




  return (
    <main className="layout">

      <Navigation />

      <SideBar />

      <section className="tripplan">
        <PageSwProvider>
          <TripPlan

            adventures={adventures}
            valueAdv={adventure}
            onChangeAdv={setAdventure}

            movies={movies}
            valueM={movie}
            onChangeM={setMovie}

            restaurants={restaurants}
            valueR={restaurant}
            onChangeR={setRestaurant}

            parks={parks}
            valueP={park}
            onChangeP={setPark}

          />
        </PageSwProvider>
      </section>

    </main>
  );
}

export default App;
