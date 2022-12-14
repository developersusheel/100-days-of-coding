import React, {useContext} from 'react'
import { CountContext } from '../../App'

const ComponentD = () => {
  const {countState, countDispatch} = useContext(CountContext);

  return (
    <div>
        Component D: {countState}
        <button onClick={()=>countDispatch('Increment')}>Increment</button>
        <button onClick={()=>countDispatch('Decrement')}>Decrement</button>
        <button onClick={()=>countDispatch('Reset')}>Reset</button>
    </div>
  )
}

export default ComponentD
