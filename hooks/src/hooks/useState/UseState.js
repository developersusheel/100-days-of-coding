import React, {useState, useEffect, useRef} from 'react'

const UseRef = () => {
  const [name, setName] = useState('');
  // const renderedCount = useRef(1);
  const inputRef = useRef();

  const focus = () =>{
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} name="name" pleaceholder="Please enter your name..." onChange={e => setName(e.target.value)}/>
      <div>My name is: {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  )
}

export default UseRef
