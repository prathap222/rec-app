import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import ChoicesList from './ChoicesList';
import "../styles/info.css";

export default function Info(props) {
  const { user, logout } = useContext(authContext);

  // Show user Info
  return (
    <div className='info'>
      <div className='top_buttons'>
        <ChoicesList
          ActivityTypes={props.activity_types}
          value={props.activity_types}
          // onChange={setActivityType}
        />
      </div>



      <div className='panel-activities'>
        {/* <div className="UserInfo">
          <p>Your Trip:: {user.tripTitle}</p>
          <p>Your city: {user.city}</p>
          <p>Your budge: {user.budge}</p>
          <p>Number of your Day(s): {user.day}</p>
          <p>Your Email: {user.email}</p>
          <div>try: {props.try}</div>
        </div > */}
        <p>
          <button type="button" onClick={logout}>Logout</button>
        </p>
      </div>


      <div>

      </div>


    </div>






  );
};


