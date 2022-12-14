import React from 'react'

const Title = () => {
  console.log('Returning Title');
  return (
    <div>Title</div>
  )
}

export default React.memo(Title)