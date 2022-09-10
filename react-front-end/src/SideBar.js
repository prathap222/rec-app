import { authContext} from './providers/AuthProvider';
import { useContext } from 'react';


export default function SideBar() {
  const { user } = useContext(authContext);

  return (
    <section className="sidebar" style={{backgroundImage: `url("images/montreal-restaurant.jpg")`}}>

      {/* <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      /> */}


      {/* <hr className="sidebar__separator sidebar--centered" /> */}


      <nav className="sidebar__menu">
      {/* <DayList
        days={state.days}
        value={state.day}
        onChange={setDay}
      /> */}

      </nav>

      <div className='sidebar__userinfo'>
        <p>Your Trip: {user && user.tripTitle}</p>
        <p>Your city: {user && user.city}</p>
        <p>Your budge: {user && user.budge} dollars</p>
        <p>Number of your Day(s): {user && user.day}</p>
        <p>Your Email: {user && user.email}</p>
      </div>

      {/* <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      /> */}


    </section>
  );
}
