import IniForm from "./IniForm";
import Info from "./Info";
import { useContext, useState } from 'react';
import { authContext} from '../providers/AuthProvider';
// import { pageSwContext } from '../providers/PageSwProvider';

//the visual mode constants
const INIT = "INIT";
const ACTI = "ACTI";

export default function TripPlan(props){

  //Providers for authentication and page switching
  const { user, login } = useContext(authContext);
  // const { page, mode, transition } = useContext(pageSwContext);

  // transition(INIT)

  //initialization of states of modes and the mode stack, the history
  const [mode, setMode] = useState(INIT);
  const [history, setHistory] = useState([INIT]);

  const firstStep = function(formData) {
    setMode(ACTI);
    login(formData);
  };

  //the function for mode transition forward among modes
  const transition = function(mode) {
    setMode(mode);
  };

  //the function for mode transition backward among modes
  function back() {
    if (history.length === 0) {
      setMode(INIT);
    }
    if (history.length > 1) {
      history.pop();
      setMode(history[history.length - 1]);
    }
  }


  return (
    <article className="tripplan" data-testid="tripplan">
      {mode === INIT && <IniForm onSubmit={firstStep} />}
      {mode === ACTI && <Info
            adventures={props.adventures}
            valueAdv={props.valueAdv}
            onChangeAdv={props.onChangeAdv}

            movies={props.movies}
            valueM={props.valueM}
            onChangeM={props.onChangeM}

            restaurants={props.restaurants}
            valueR={props.valueR}
            onChangeR={props.onChangeR}

            parks={props.parks}
            valueP={props.valueP}
            onChangeP={props.onChangeP}
      />}

    </article>
  );
}
