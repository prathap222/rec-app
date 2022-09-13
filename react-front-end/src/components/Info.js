import { useContext, useState } from 'react';
import { authContext, mode, setMode } from '../providers/AuthProvider';
// import { pageSwContext } from '../providers/PageSwProvider';
import AdventureList from './AdventureList';
import Adventure from './Adventure';
import Button from './Button';
import "../styles/info.css";

const AVDVEN = "AVDVEN";
const MOVIE = "MOVIE";
const RESTA = "RESTA";
const PARK = "PARK";


export default function Info(props) {
  const { user, logout } = useContext(authContext);
  // const { mode, transition } = useContext(pageSwContext);

  const [mode, setMode] = useState(AVDVEN);

  const handleClick = mode => {
    setMode(mode);
  };

  // Show user Info; () => {}
  return (
    <div className='info'>
      <header className='top_buttons'>
        <Button onClick={() => handleClick(AVDVEN)}>Adventures</Button>
        <Button onClick={() => handleClick(MOVIE)}>Movies</Button>
        <Button onClick={() => handleClick(RESTA)}>Restaurants</Button>
        <Button onClick={() => handleClick(PARK)}>Parks</Button>

      </header>


      <div className='panel-adventureList'>
        {
        mode === AVDVEN && <AdventureList
          adventures={props.adventures}
          valueAdv={props.valueAdv}
          onChangeAdv={props.onChangeAdv}
        />
        }
      </div>


      <div className='panel-adventures'>
        {
          mode === AVDVEN && <Adventure
          id={props.valueAdv.id}
          name={props.valueAdv.name}
          cost={props.valueAdv.price_cents}
          img={props.valueAdv.image_url}
          />
        }
        <p>
          <button type="button" onClick={logout}>Logout</button>
        </p>
      </div>
    </div>

  );
};


