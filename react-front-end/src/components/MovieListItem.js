import React from "react";
import "../styles/ActivityListItem.scss";
import classNames from "classnames";

export default function MovieListItems(props) {
  const dayClass = classNames("adven-list__item", {
    " adven-list__item--selected": props.selected,
    // " activity-list__item--full": props.spots === 0
  });


  return (
    <li className={dayClass} data-testid="adven" onClick={() => props.setAdven(props.name)} selected={props.selected}>
      <h2 className={dayClass}>{props.name}</h2>
    </li>
  );
}
