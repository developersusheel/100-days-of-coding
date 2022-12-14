import React, {useReducer} from 'react'


const initialValue = 0;
const reducer = (state, action) => {
  switch (action){
    case 'Increment':
      return state + 1;
    case 'Decrement':
      return state - 1;
    case 'Reset':
      return state = initialValue;
    default:
      return state
  }
}

const UseReducer1 = () => {
    const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
    <div>Count - {count}</div>
      <button onClick={()=>dispatch('Increment')}>Increment</button>
      <button onClick={()=>dispatch('Decrement')}>Decrement</button>
      <button onClick={()=>dispatch('Reset')}>Reset</button>
    </div>
  )
}

export default UseReducer1
