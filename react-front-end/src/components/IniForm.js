import { useState } from 'react';
import { authContext } from '../providers/AuthProvider';
import { useContext } from 'react';

export default function IniForm() {
  const [email, setEmail] = useState("");
  const [tripTitle, setTripTitle] = useState("");
  const [city, setCity] = useState("Vancouver");
  const [budge, setBudge] = useState(0);
  const [day, setDay] = useState(1);

  const { login } = useContext(authContext);

  const onSubmit = function(event) {
    event.preventDefault();
    email && login(email, tripTitle, city, budge, day);
  };

console.log("IniForm");

  return (
    <div className="login">
      <form onSubmit={onSubmit}>
        <p>
          <input type="text" name="text"
            value={tripTitle} placeholder="Enter your trip purpose"
            onChange={event => setTripTitle(event.target.value)} />
        </p>
        <p>
          <input type="text" name="text"
            value={city} placeholder="Enter city"
            onChange={event => setCity(event.target.value)} />
        </p>
        <p>
          <input type="number" name="number"
            value={budge} placeholder="Enter budge"
            onChange={event => setBudge(event.target.value)} />
        </p>
        <p>
          <input type="number" name="number"
            value={day} placeholder="Enter day"
            onChange={event => setDay(event.target.value)} />
        </p>
        <p>
          <input type="text" name="username"
            value={email} placeholder="Enter Username or email"
            onChange={event => setEmail(event.target.value)} />
        </p>
        {/* <p>
          <input type="password" name="password"
            value={password} placeholder="Enter Password"
            onChange={event => setPassword(event.target.value)} />
        </p> */}
        <p className="submit">
          <button type="submit" name="commit">Login</button>
        </p>
      </form>

    </div>
  );
};
