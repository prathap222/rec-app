
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

  const [user, setUser] = useState(userObject);
  const [background, setBackGround] = useState("https://dbdzm869oupei.cloudfront.net/img/quadres/preview/31465.png")

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
