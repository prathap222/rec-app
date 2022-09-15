import React, { useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";

const CardList = props => {

  useEffect(() => {
    if (props.column.name !== "List of Activities") {
      const listOfCosts = props.column.items.map(act => {
        return act.price_cents / 100;
      });
      const totalCosts = listOfCosts.reduce((a, b) => a + b, 0);
      let newState = { ...props.columns };
      newState[props.columnId].total = totalCosts;
      props.setColumns(newState);
    }
  }, [props.column.items.length]);



  return (
    <Droppable
      droppableId={props.columnId}
      key={props.columnId}
      isDropDisabled={
        props.columnId === "list"
      }
    >
      {(provided, snapshot) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={"inside-column"}
            style={{
              background: snapshot.isDraggingOver
                ? "linear-gradient(to right bottom, #7F5A58, #C4AEAD)"
                : "linear-gradient(to right bottom, #872657, #7F525D, #BC8F8F)"
            }}
          >

            {
            props.column.items.length === 0
            // ? <img src="https://media3.giphy.com/media/3oEduVuDlWIe751xPW/giphy.gif" width="100%"/>
            // ? <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/5e833c23132493.5631dc1e8ba98.gif" width="100%" height="100%" />
            // ? <img src="https://static.wixstatic.com/media/c6ba6c_95d07d0346754bf1b602bb7ffb9072bb~mv2.gif" width="100%" height="100%" />
            ? <img src="https://i.pinimg.com/originals/f7/0b/18/f70b1806d7128b4843d81a5a62bb3b07.gif"/>
            : props.column.items.map((item, index) => {
              return (
                <Card
                  isClone="true"
                  key={item.id}
                  draggableId={item.id}
                  droppableId={props.columnId}
                  index={index}
                  item={item}
                  setColumns={props.setColumns}
                  columns={props.columns}
                  setHoverActivity={props.setHoverActivity}
                />
              );
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default CardList;
