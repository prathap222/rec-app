import React from "react";
import { Link } from "react-router-dom";

const CityItem = props => {
  let budget = !isNaN(props.value) ? props.value : "budget_not_given";
  if (!isNaN(budget)) {
    return (
      <div>
        {console.log(props.image_url)}
        <Link
          className="test"
          to={`/main/${props.city}/${budget}`}
          onMouseOver={() => {
            props.setBackGround(props.image_url);
          }}
        >
          {!props.numActs? "":
            <>  {props.numActs <= 1
            ? `${props.city} (enjoy ${props.numActs} activity)`
            : `${props.city} (enjoy ${props.numActs} activities)`}
            </> }

        </Link>
      </div>
    );
  }
  return (
    <div>
      {console.log(`CityItem: props.image_url: ${props.image_url}`)}
      {console.log(`CityItem: props.city: ${props.city}`)}
      <Link
        to={`/main/${props.city}/${budget}`}
        onMouseOver={() => {
          props.setBackGround(props.image_url);
        }}
      >
        {props.city}
      </Link>
    </div>
  );
};

export default CityItem;
