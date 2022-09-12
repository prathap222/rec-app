import React from "react";
import AdventureListItems from "./AdventureListItems";

export default function MovieList(props) {
  // //the array of MovieList's child DayListItem component
  // let advenListItemArr = props.adventures.map((adven) => {
  //   return (
  //     <MovieListItems
  //       key={adven.id}
  //       name={adven.name}
  //       selected={adven.name === props.valueAdv}
  //       setAdven={props.onChange}
  //     />
  //   );
  // });

  return (
    <ul>
      {/* {advenListItemArr} */}
    </ul>

  );
}
