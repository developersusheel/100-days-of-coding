import React, {useState, useMemo} from 'react'

const UseMemo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  // const [odd, setOdd] = useState(null);

  const firstCounter = () =>{
    setCounterOne(counterOne + 1);
  }

  const secondCounter = () =>{
    setCounterTwo(counterTwo + 1);
  }
  
  const isEven =  useMemo(()=>{
    let i = 0;
    while( i < 2000000000) i++
    return counterOne % 2 ===0
  }, [counterOne]) 

  return (
    <div>
      <button onClick={firstCounter}>Counter First: {counterOne}</button>
      <div>{isEven ? 'Even' : 'Odd'}</div>
      <button onClick={secondCounter}>Counter Second: {counterTwo}</button>
    </div>
  )
}

export default UseMemo