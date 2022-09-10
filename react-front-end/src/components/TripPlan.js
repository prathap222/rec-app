import IniForm from "./IniForm";
import Info from "./Info";
import { useContext } from 'react';
import { authContext} from '../providers/AuthProvider';
import { pageSwContext } from '../providers/PageSwProvider';


//the visual mode constants
const INIT = "INIT";
const CREATE = "CREATE";
const EDIT = "EDIT";
const SHOW = "SHOW";
const SAVING = "SAVING";
const DELETING = "DELETING";


export default function TripPlan(props){

  //Providers for authentication and page switching
  const { auth } = useContext(authContext);
  const { page, mode, transition } = useContext(pageSwContext);


  return (
    <article className="tripplan" data-testid="tripplan">
      {!auth && <IniForm />}
      {auth && <Info try={props.tripplan} />}
    </article>
  );
}
