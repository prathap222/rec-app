import { v4 } from 'uuid'
export default function addCardList (columns,setColumns) {
  let keys = Object.keys(columns)
  let id = v4()
  let name = `Day ${keys.length}`
  let newState = {
    ...columns,
    [id]:{
      name,
      items: [],
      total: 0
    }}
  setColumns(newState)
}
