import React from "react";
import AdventureListItems from "./AdventureListItems";

export default function AdventureList(props) {
  // //the array of AdventureList's child DayListItem component

console.log("props.adventures: ", props.adventures)

  let advenListItemArr = props.adventures.map((adven) => {
    return (
      <AdventureListItems
        key={adven.id}
        name={adven.name}
        selected={adven.name === props.valueAdv}
        setAdven={props.onChangeAdv}
      />
    );
  });

  return (
    <ul>
      {advenListItemArr}
    </ul>

  );
}
