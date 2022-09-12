import { useContext, useState } from 'react';
import { authContext } from '../providers/AuthProvider';
import { pageSwContext } from '../providers/PageSwProvider';
import AdventureList from './AdventureList';
import Adventure from './Adventure';
import "../styles/info.css";

export default function Info(props) {
  const { user, logout } = useContext(authContext);
  // const { transition } = useContext(pageSwContext);
  // const [isShown, setIsShown] = useState(false);

  // const handleClick = event => {
  //   transition(<AdventureList/>);
  // };

  // Show user Info
  return (
    <div className='info'>
      <header className='top_buttons'>
        <button onClick={() => {}}>
Adventures
         {/* {setIsShown && <AdventureList/>} */}

        </button>

        <button onClick={() => {}}>Movies</button>
        <button onClick={() => {}}>Restaurants</button>
        <button onClick={() => {}}>Parks</button>

      </header>


      <div className='panel-adventureList'>
        <AdventureList
          adventures={props.adventures}
          valueAdv={props.valueAdv}
          onChangeAdv={props.onChangeAdv}
        />

      </div>


      <div className='panel-adventures'>
        <Adventure
          id={props.valueAdv.id}
          name={props.valueAdv.name}
          cost={props.valueAdv.price_cents}
          img={props.valueAdv.image_url}
        />

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


