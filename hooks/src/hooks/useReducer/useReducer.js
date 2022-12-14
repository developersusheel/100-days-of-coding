import React from 'react'

const UseReducer = () => {

  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const render = (final, current) => final + current;


  return (
    <>
      <div>{array.reduce(render)}</div>
      <div>{array.reduce(render, 10)}</div>
    </>
  )
}

export default UseReducer