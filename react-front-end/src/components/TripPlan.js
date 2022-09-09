import useVisualMode from "../hooks/useVisualMode";
import IniForm from "./IniForm";
import Info from "./Info";
import { authContext} from '../providers/AuthProvider';
import { useContext } from 'react';

//the visual mode constants
const INIT = "INIT";
const CREATE = "CREATE";
const EDIT = "EDIT";
const SHOW = "SHOW";
const SAVING = "SAVING";
const DELETING = "DELETING";


export default function TripPlan(props){
  //comstom Hook useVisualMode's initialization
  const { mode, transition, back } = useVisualMode(
    props.tripplan ? INIT : INIT);

console.log("hello, the props.tripplan is: ", props.tripplan);
console.log("hello, the mode is: ", mode);


  //auth from AuthProvider
  const { auth } = useContext(authContext);

  //create new form
  function onAdd() {
    transition(CREATE);
  }


  return (
    <article className="tripplan" data-testid="tripplan">
      {/* { mode === 'INIT' && <IniForm onClick={() => onAdd()} /> } */}
      {!auth && <IniForm />}
      {auth && <Info />}
    </article>
  );
}
