import React, {useEffect, useState} from 'react'

const UseEffect2 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () =>{
      window.removeEventListener('resize', handleResize);
    }
  }, [windowWidth])

  return (
    <div>{windowWidth}</div>
  )
}

export default UseEffect2;