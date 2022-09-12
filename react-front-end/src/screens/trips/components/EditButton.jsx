import React from "react";
import { useNavigate } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";

export default function EditButton(props) {
  const navigate = useNavigate();
  return (
    <Fab
      onClick={() => {
        navigate(
          `/edit/${props.trip.city}/${props.trip.trip_budget}/${props.trip.trip_name}/${props.trip.id}`
        );
      }}
      color="primary"
      aria-label="edit"
      id="edit-button"
    >
      <EditIcon />
    </Fab>
  );
}
