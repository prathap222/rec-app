import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';

export default function Info(props) {
  const { user, logout } = useContext(authContext);

  // Show user Info
  return (
    <div>
      <div className="UserInfo">
        <p>Your Trip:: {user.tripTitle}</p>
        <p>Your city: {user.city}</p>
        <p>Your budge: {user.budge}</p>
        <p>Number of your Day(s): {user.day}</p>
        <p>Your Email: {user.email}</p>
        {/* <div>try: {props.try}</div> */}


      </div >
      <p>
        <button type="button" onClick={logout}>Logout</button>
      </p>

    </div>
  );
};


