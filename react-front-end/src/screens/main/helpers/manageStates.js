import axios from 'axios'
import { v4 } from 'uuid'
export default function manageStates (
  city,
  tripId,
  setColumns,
  columnsFromBackend,
  setActivities,
  setInitialBudget
  ) {
  if(!city) {
    setActivities([])
    return
  }
  axios.get(`/api/activities/${city}`)
    .then(res=> {
      console.log(res.data.activities)
      const activities = res.data.activities
      const result = activities.map((act)=>{
        return {
          id: v4(),
          activity_id: act.id,
          price_cents: act.price_cents,
          operation_time: act.operation_time,
          latitude: act.latitude,
          longitude: act.longitude,
          image_url: act.image_url,
          destination_id: act.destination_id,
          name: act.name
        }
      })
      setActivities(result)

      let columnsFromLocal = JSON.parse(localStorage.getItem('columns'));
      let listOfColumns = columnsFromLocal || columnsFromBackend(result);

      if(localStorage.getItem('budget') && !isNaN(localStorage.getItem('budget'))) {
        console.log(localStorage.getItem('budget'))
        let budgetFromLocal = Number(localStorage.getItem('budget'))
        setInitialBudget(budgetFromLocal)
      }
      localStorage.removeItem("budget");
      localStorage.removeItem("columns");

      if (!tripId) {
        setColumns(listOfColumns)
      } else {

        axios.get(`/trips/edit/${tripId}`)
        .then (res => {
          let list = listOfColumns['list'];
          let newState={list};

          res.data.forEach((obj) => {
            newState[obj.schedule_id] = {
              name: obj.schedule_name,
              items:[],
              total:0
            }
          })

          res.data.forEach((obj)=>{
            const item = {
              id: obj.itinerary_id,
              activity_id: obj.activity_id,
              price_cents: obj.price_cents,
              operation_times: obj.operation_time,
              latitude: obj.latitude,
              longitude: obj.longitude,
              image_url: obj.image_url,
              destination_id: obj.destination_id,
              name: obj.name
            }
            newState[obj.schedule_id].items.push(item);
          })
            setColumns(newState)

        })

      }

    })
    .catch((err) => {
      if (err.status === 404) {
        console.log("Sorry!!! Noluck!!! 404")
      } else {
        console.error(err);
      }
    })

}
