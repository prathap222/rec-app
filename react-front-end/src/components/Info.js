import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';

export default function Info(props) {
  const { user, logout } = useContext(authContext);

  // Show user Info
  return (
    <div>
      <p className="UserInfo">
        <div>Your Trip:: {user.tripTitle}</div>
        <div>Your city: {user.city}</div>
        <div>Your budge: {user.budge}</div>
        <div>Number of your Day(s): {user.day}</div>
        <div>Your Email: {user.email}</div>
        {/* <div>try: {props.try}</div> */}


      </p >
      <p>
        <button type="button" onClick={logout}>Logout</button>
      </p>

    </div>
  );
};


