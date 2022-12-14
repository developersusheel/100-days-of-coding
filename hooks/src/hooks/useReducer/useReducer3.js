import React, {useReducer} from 'react'


const initialValue = {
  firstCounter: 0
}
const reducer = (state, action) => {
  switch (action.type){
    case 'Increment':
      return {...state, firstCounter: state.firstCounter + action.value}
    case 'Decrement':
      return {...state, firstCounter: state.firstCounter - action.value}
    case 'Reset':
      return state = initialValue;
    default:
      return state
  }
}

const UseReducer3 = () => {
    const [count, dispatch] = useReducer(reducer, initialValue);
    const [count2, dispatch2] = useReducer(reducer, initialValue);

  return (
    <>
      <div>
        <div>First Counter - {count.firstCounter}</div>
        <button onClick={()=>dispatch({type: 'Increment', value: 1})}>Increment</button>
        <button onClick={()=>dispatch({type: 'Decrement', value: 1})}>Decrement</button>
        <button onClick={()=>dispatch({type: 'Reset'})}>Reset</button>
      </div>
      <hr></hr>
      <div>
        <div>Second Counter - {count2.firstCounter}</div>
        <button onClick={()=>dispatch2({type: 'Increment', value: 1})}>Increment</button>
        <button onClick={()=>dispatch2({type: 'Decrement', value: 1})}>Decrement</button>
        <button onClick={()=>dispatch2({type: 'Reset'})}>Reset</button>
      </div>
    </>
  )
}

export default UseReducer3
