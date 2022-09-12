import { v4 } from 'uuid'
export default function onDragEnd (result, columns, setColumns){
  const { source, destination } = result;

  if (!result.destination && source.droppableId === 'list') {
    return
  } else if (!result.destination && source.droppableId !== 'list') {
    let srcColumn = columns[source.droppableId];
    let srcItems = [...srcColumn.items];
    srcItems.splice(source.index, 1);
    const list = columns[`list`];
    const listItems = [...list.items]

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...srcColumn,
        items: srcItems
      },
      'list': {
        ...list,
        items: listItems
      }
    });
    return
  }


  if (source.droppableId ==='list' && source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    let removed = {...sourceItems[source.index]};
    removed.id = v4();
    destItems.splice(destination.index, 0, removed);

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else if ( source.droppableId !== destination.droppableId ) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }

};
