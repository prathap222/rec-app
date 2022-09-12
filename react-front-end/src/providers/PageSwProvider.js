import { createContext, useState } from 'react';

export const pageSwContext = createContext();

//the function for the page switching provider
export default function PageSwProvider(initial) {
  //initialization of states of modes and the mode stack, the history
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  //the function for mode transition forward among modes
  // function transition(next, replace = false) {
  //   if (replace) {
  //     let newhistory = history.slice(0, -1).concat(next);

  //     setHistory(newhistory);

  //   } else {
  //     setHistory((prev) => [...prev, next]);

  //   }
  //   setMode(next);
  // }

  //the function for mode transition forward
  const transition = function(mode) {
    setMode(mode);
  };

  //the function for mode transition backward among modes
  function back() {
    if (history.length === 0) {
      setMode(initial);
    }
    if (history.length > 1) {
      history.pop();
      setMode(history[history.length - 1]);
    }
  }

  const pageSwData = { mode, transition, back };

  //returning the object of the state management
  return (
    <pageSwContext.Provider value={pageSwData}>
      {initial.children}
    </pageSwContext.Provider>
  );
}
