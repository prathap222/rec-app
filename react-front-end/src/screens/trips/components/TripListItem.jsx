import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";

const TripListItem = props => {
  let navigate = useNavigate();
  return (
    <div className='itinerary-item'>
      <Button
        style={{color:'black'}}
        onClick={()=>{navigate(`/itinerary/${props.trip.id}/${props.trip.country}/${props.trip.city}`)}}
        >
        <span className='trip-name'>{props.trip.trip_name}</span>
      </Button>
      <h5 className='trip-destination'>
        Total: ${props.trip.total_cost} ({props.trip.city}, {props.trip.country})
      </h5>
    </div>
  )
}
export default TripListItem;
