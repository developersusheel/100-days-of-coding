import React, {useContext} from 'react'
import { CountContext } from '../../App'

const ComponentF = () => {
  const {countState, countDispatch} = useContext(CountContext);

  return (
    <div>
        ComponentF: {countState}
        <button onClick={()=>countDispatch('Increment')}>Increment</button>
        <button onClick={()=>countDispatch('Decrement')}>Decrement</button>
        <button onClick={()=>countDispatch('Reset')}>Reset</button>
    </div>
  )
}

export default ComponentF
