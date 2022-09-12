import axios from 'axios';
import { v4 } from 'uuid';
import qs from 'qs';

export default function postToBackEnd (tripName, tripId, userId, columns, total, budget) {
  const columnCopy = { ...columns };
  delete columnCopy["list"];
  for (let key in columnCopy) {
    if (!columnCopy[key].items.length) {
      delete columnCopy[key];
    }
  }

  const header = { headers: {'Content-Type': 'application/json'} }
  const trip_id = tripId || v4();

  const userInput = {}
  userInput.trip_id = trip_id
  userInput.userId = userId
  userInput.trip = tripName
  userInput.columns = columnCopy
  userInput.total = total
  userInput.budget = budget

  console.log(`${JSON.stringify(userInput)}`)

  const config = {
    method: "POST",
    url: "/trips",
    headers: header,
    data: qs.stringify(userInput)
  }

  console.log(`config: ${JSON.stringify(config)}`)

  return axios.request(config)
};

