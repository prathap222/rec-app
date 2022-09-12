import React from "react";
import AdventureListItems from "./AdventureListItems";

export default function AdventureList(props) {
  // //the array of AdventureList's child DayListItem component
  let advenListItemArr = props.adventures.map((adven) => {
    return (
      <AdventureListItems
        key={adven.id}
        name={adven.name}
        selected={adven.name === props.valueAdv}
        setAdven={props.onChange}
      />
    );
  });

  return (
    <ul>
      {advenListItemArr}
    </ul>

  );
}
