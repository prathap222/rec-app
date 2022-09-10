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

        {user && user.email}
      </nav>


      {/* <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      /> */}


    </section>
  );
}
