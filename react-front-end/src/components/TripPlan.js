import IniForm from "./IniForm";
import useVisualMode from "../hooks/useVisualMode";

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
    props.tripplan ? INIT
    : INIT);

  //create new form
  function onAdd() {
    transition(CREATE);
  }

  console.log(" hello there!", mode);

  return (
    <article className="tripplan" data-testid="tripplan">
      { mode === 'INIT' && <IniForm onClick={() => onAdd()} /> }

    </article>
  );
}
