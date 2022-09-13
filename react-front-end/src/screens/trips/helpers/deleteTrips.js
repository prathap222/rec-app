import axios from 'axios';

export default function deleteTrip(trip, trips, setTrips) {
  let tripId = trip.id;

  let copy = [...trips];

  let newState = copy.filter(trip => trip.id !== tripId);

  const header = { headers: {'Content-Type': 'application/x-www-form-urlencoded'} }
  const userInput = new URLSearchParams();
  userInput.append('tripId', tripId)

  axios.post('/trips/delete', userInput, header)
  .then((res) => {
    setTrips(newState);
  })
}
