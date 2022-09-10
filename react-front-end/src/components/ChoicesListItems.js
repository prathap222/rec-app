import React from "react";

export default function ChoicesListItems(props) {

  return (

    <li className="activities_type_choices" >
      <h2 className="activities_type_choices">{props.name}</h2>
    </li>
  );
} //onClick={() => props.setDay(props.name)} selected={props.selected}
