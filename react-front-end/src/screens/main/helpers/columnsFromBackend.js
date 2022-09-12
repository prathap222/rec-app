import { v4 } from 'uuid'

export default function columnsFromBackend (arg, numOfDays) {
  let result = {
    'list': {
      name: 'List of Activities',
      items: arg,
      total: 0
    },
    [v4()]: {
      name: 'Day 1',
      items: [],
      total: 0
    }
  }

  return result
};
