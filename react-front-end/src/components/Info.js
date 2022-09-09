import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';

export default function Info() {
  const { user, logout } = useContext(authContext);

  // Show user Info
  return (
    <div>
      <p className="UserInfo">
        <div>Login already!</div>
        <div>tripTitle: {user.tripTitle}</div>
        <div>city: {user.city}</div>
        <div>budge: {user.budge}</div>
        <div>day(s): {user.day}</div>
        <div>Email: {user.email}</div>
      </p >
      <p>
        <button type="button" onClick={logout}>Logout</button>
      </p>

    </div>
  );
};


