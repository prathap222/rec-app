
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//components
import Home from "./screens/home/components/Home"
import Main from './screens/main/components/Main'
import Trips from './screens/trips/components/Trips'
import Login from './screens/login/components/Login'
import Itinerary from './screens/itinerary/components/Itinerary'


export default function App () {

  let cookieAsObject = Object.fromEntries(
    document.cookie.split('; ')
      .map(x => x.split('='))
      .map(([k, v]) => [k, decodeURIComponent(v)])
  );
  let userObject = JSON.parse(cookieAsObject.user || 'null');

  const image = "https://img.freepik.com/free-photo/beautiful-shot-silhouette-plane-flying-sky-during-sunrise_181624-21935.jpg?w=1480&t=st=1663037596~exp=1663038196~hmac=c6d8644c561af11dffb8db50309d6fbb4a0d237801f7afa94b4e9bf216a2cffa";
  // const image = "https://img.freepik.com/free-photo/concept-travel-adventure-traveller-lifestyle_185193-88429.jpg?w=1380&t=st=1663037583~exp=1663038183~hmac=a4f7ce2b39bdae31d4fba9adf73fb178b0df094c54b3b1696647ba3edfbffec9"
  // const image = "https://img.freepik.com/free-photo/concept-travel-adventure-traveller-lifestyle_185193-86317.jpg?w=1380&t=st=1663037763~exp=1663038363~hmac=64f2c5444f50e7dc11d2322c624306670a042f4baea01c06b7e0baaf77cb28ad"

  const [user, setUser] = useState(userObject);
  const [background, setBackGround] = useState(image)

  const homeprops = {}
  homeprops.background = background
  homeprops.setBackGround = setBackGround
  homeprops.user = user
  homeprops.setUser = setUser

  const userprops = {}
  userprops.user = user
  userprops.setUser = setUser


  return (
    <Router>
      <Routes>
        {console.log(`App.js: background: ${background}`)}
        {console.log(`App.js: setBackGround: ${setBackGround}`)}

            {/* <Route path="/" element={<Home {...user} {...setUser} {...background} {...setBackGround} />} /> */}
            {/* <Route path="/login" element={<Login {...user} {...setUser} />} /> */}
            {/* <Route path="/main/:city/:budget" element={<Main {...user} {...setUser}  />} /> */}
            {/* <Route path="/edit/:city/:budget/:tripName/:tripId" element={<Main {...user} {...setUser} />} /> */}
            {/* <Route path="/itinerary/:itineraryId/:country/:city" element={<Itinerary {...user} {...setUser} />} /> */}
            {/* <Route path="/trips/:userName" element={<Trips {...user} {...setUser} />} /> */}


            <Route path="/main/:city/:budget" element={<Main {...userprops}  />} />
            <Route path="/edit/:city/:budget/:tripName/:tripId" element={<Main {...userprops} />} />
            <Route path="/itinerary/:itineraryId/:country/:city" element={<Itinerary {...userprops} />} />
            <Route path="/trips/:userName" element={<Trips {...userprops} />} />
            <Route path="/login" element={<Login {...userprops} />} />
            <Route path="/" element={<Home {...homeprops} />} />

      </Routes>
    </Router>

  );
}
