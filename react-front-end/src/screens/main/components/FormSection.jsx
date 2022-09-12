import React from "react";
import Form from "./Form";
import SaveTrip from "./SaveTrip";
import saveToLocal from "../helpers/saveToLocal";
import { Link } from "react-router-dom";

const FormSection = props => {
  return (
    <div className="form-section ">
      {console.log(`FormSection page: budget: ${props.budget}`)}
      <div>
        <h1>
          {" "}
          <strong>{props.city}</strong>
        </h1>
        <h2>
          {" "}
          {!props.budget || isNaN(props.budget)?'$'+0:
          <>
          {props.budget > 0 ? `$${props.budget}` : `-$${-props.budget}`}
          </>
          }
          {" "}
        </h2>
      </div>
      <Form budget={props.budget} setBudget={props.setBudget} />
      {props.user ? (
        <div>
          <SaveTrip
            columns={props.columns}
            user={props.user}
            total={props.total}
            city={props.city}
            budget={props.budget}
            tripId={props.tripId}
            tripName={props.tripName}
          />

        </div>
      ) : (
        <Link onClick={() => {
          if(props.columns) {
            saveToLocal(props.columns, props.budget)
          }
        }}to="/login">
          Login to Save
        </Link>
      )}
    </div>
  );
};

export default FormSection;
