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
      {auth && <Info
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
