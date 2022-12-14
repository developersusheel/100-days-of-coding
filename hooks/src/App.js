import React, {useReducer, createContext} from 'react';
// import AuthContextProvider from './hooks/useContext/AuthContext';
import ComponentA from './hooks/useReducer/ComponentA';
import ComponentB from './hooks/useReducer/ComponentB';
import ComponentC from './hooks/useReducer/ComponentC';
import './index.css';

export const CountContext = createContext(); 

const initialValue = 0;
const reducer = (state, action) =>{
  switch (action){
    case 'Increment':
      return state + 1;
    case 'Decrement':
      return state - 1;
    case 'Reset':
      return initialValue; 
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <div className="App">
          <div>Count: {count}</div>
          <ComponentA/>
          <ComponentB/>
          <ComponentC/>
        </div>
      </CountContext.Provider>
  );
}

export default App;
