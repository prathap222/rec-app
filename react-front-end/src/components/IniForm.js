import { useContext, useState } from 'react';
import { authContext } from '../providers/AuthProvider';

export default function IniForm(props) {
  const [email, setEmail] = useState("");
  const [tripTitle, setTripTitle] = useState("");
  const [city, setCity] = useState("Vancouver");
  const [budge, setBudge] = useState(0);
  const [day, setDay] = useState(1);

  const { login } = useContext(authContext);

  const onSubmit = function(event) {
    event.preventDefault();
    email && props.onSubmit({ email, tripTitle, city, budge, day });
  };


  return (
    <div className="login">
      <form onSubmit={onSubmit}>
        <label htmlFor='tripTitle'>
          Your trip is for?
        </label>
        <p>
          <input type="text" id="tripTitle"
            value={tripTitle} placeholder="Enter your trip purpose"
            onChange={event => setTripTitle(event.target.value)} />
        </p>

        <label htmlFor='city'>
          City:
        </label>
        <p>
          <input type="text" id="city"
            value={city} placeholder="Enter city"
            onChange={event => setCity(event.target.value)} />
        </p>

        <label htmlFor='budget'>
          Budget:
        </label>
        <p>
          <input type="number" id="budget"
            value={budge} placeholder="Enter budge"
            onChange={event => setBudge(event.target.value)} />
        </p>

        <label htmlFor='days'>
          Number of days:
        </label>
        <p>
          <input type="number" id="days"
            value={day} placeholder="Enter day"
            onChange={event => setDay(event.target.value)} />
        </p>

        <label htmlFor='email'>
          Email:
        </label>
        <p>
          <input type="text" id="email"
            value={email} placeholder="Enter email"
            onChange={event => setEmail(event.target.value)} />
        </p>
        {/* <p>
          <input type="password" name="password"
            value={password} placeholder="Enter Password"
            onChange={event => setPassword(event.target.value)} />
        </p> */}
        <p className="submit">
          <button type="submit" name="commit">Let's get started to plan!</button>
        </p>
      </form>

    </div>
  );
};
