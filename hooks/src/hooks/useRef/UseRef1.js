import React, {useState, useEffect, useRef} from 'react'

const UseRef1 = () => {
  const [name, setName] = useState('');
  const prevName = useRef('');

  useEffect(() => {
    prevName.current = name;
  })

  return (
    <>
      <input name="name" pleaceholder="Please enter your name..." onChange={e => setName(e.target.value)}/>
      <div>My name is: {name} and it used to be {prevName.current}</div>
    </>
  )
}

export default UseRef1
