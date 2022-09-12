import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import AdventureList from './AdventureList';
import "../styles/info.css";

export default function Info(props) {
  const { user, logout } = useContext(authContext);

  // Show user Info
  return (
    <div className='info'>
      <header className='top_buttons'>
        <AdventureList
          adventures={props.adventures}
          valueAdv={props.valueAdv}
          onChangeAdv={props.onChangeAdv}
        />
      </header>

      <div className='panel-adventures'>

        <p>
          <button type="button" onClick={logout}>Logout</button>
        </p>
      </div>

      <div className='panel-movies'>
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

      <div className='panel-restaurants'>
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

      <div className='panel-parks'>
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

    </div>






  );
};


