import { useState, useEffect } from "react";
import axios from "axios";

//function of the custum hook useApplicationData
export default function useApplicationData() {

  const [state, setState] = useState({
    users: "",
    activities: "",
    cities: "",
  });

  //To update the day state and retainning the state for days and appointments and
  //to create new objects to be called to update the state with new day
  // const setActivityType = activity => setState({ ...state, activityType });

  useEffect(() => {

    Promise.all([
      axios.get("/api/users"),
      axios.get("/api/activities"),
      axios.get("/api/cities/whistler")
    ])
    .then(all => {
      setState(prev => ({
        ...prev,
        users: all[0].data.users,
        activities: all[1].data.activities,
        cities: all[2].data.cities
      }));

    });
  }, []);




  //keep track of correct and updated number of interview spots available
  // function spotsAvailDay(newState, newAppointments) {
  //   //iterate all days from Monday to Friday
  //   //and return all updated spots for all weekdays
  //   return newState.days.map((day) => {
  //     let spotsAvail = 0;

  //     //go thru all of the appointments during that particular one day
  //     for (let id of day.appointments) {
  //       //if the interview object of that one appointment is null
  //       if (!newAppointments[id].interview) {
  //         spotsAvail++;
  //       }
  //     }

  //     //return the updated number of spots for one weekday
  //     return { ...day, spots: spotsAvail };
  //   });

  // }


  //change the local state to book an interview
  function bookInterview(id, interview) {

    //received the individual appointment
    const appointment = {
      // ...state.appointments[id],
      // interview: { ...interview }
    };

    //place the individual appointment into
    //the appointments object
    const appointments = {
      // ...state.appointments,
      // [id]: appointment
    };

    //array of days objects with updated spots
    // const days = spotsAvailDay(state, appointments)

    //send to api database and update appointments and days states.
    // return axios.put(`/api/appointments/${id}`, { interview })
    // .then(() => {
    //   setState({ ...state, appointments, days });
    // });
  }

  //change the local state to cancel an interview
  function cancelInterview(id) {
    //let the individual appointment
    //have a null interview
    // const appointment = {
    //   ...state.appointments[id],
    //   interview: null
    // };

    //place the individual appointment into
    //the appointments object
    // const appointments = {
    //   ...state.appointments,
    //   [id]: appointment
    // };

    //array of days objects with updated spots
    // const days = spotsAvailDay(state, appointments);

    //return the updated appointment
    //back to api database
    //and update the local appointments object
    // return axios.delete(`/api/appointments/${id}`)
    // .then(() => {
    //   setState({...state, appointments, days });
    // });

  }

  //return all useApplicationData's objects
  return {
          //  users,
          //  activities,
          //  cities
        state
      };
}
