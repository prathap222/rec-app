import { useContext, useState } from 'react';
import { authContext } from '../providers/AuthProvider';
import { pageSwContext } from '../providers/PageSwProvider';
import AdventureList from './AdventureList';
import Adventure from './Adventure';
import Button from './Button';
import "../styles/info.css";

const AVDVEN = "AVDVEN";
const MOVIE = "MOVIE";
const RESTA = "MOVIE";
const PARK = "PARK";

const INIT = "INIT";
const CREATE = "CREATE";
const EDIT = "EDIT";
const SHOW = "SHOW";
const SAVING = "SAVING";
const DELETING = "DELETING";


export default function Info(props) {
  const { user, logout } = useContext(authContext);
  const { mode, transition } = useContext(pageSwContext);
  // const [isShown, setIsShown] = useState(false);


  const handleClick = mode => {
    transition(mode);
  };

  // Show user Info; () => {}
  return (
    <div className='info'>
      <header className='top_buttons'>
        <Button onClick={handleClick}>
Adventures
         {/* {setIsShown && <AdventureList/>} */}

        </Button>

        <Button onClick={handleClick}>Movies</Button>
        <Button onClick={handleClick}>Restaurants</Button>
        <Button onClick={handleClick}>Parks</Button>

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





    </div>






  );
};


