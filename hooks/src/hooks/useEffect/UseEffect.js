import React, {useEffect, useState} from 'react'

const UseEffect = () => {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json));
  }, [resourceType]);

  return (
    <>
    <div>
      <button onClick={()=>setResourceType('posts')}>Posts</button>
      <button onClick={()=>setResourceType('users')}>Users</button>
      <button onClick={()=>setResourceType('comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    <ul>{items.map(item => 
      {return <pre key={item.id}>{JSON.stringify(item)}</pre>;})}
      </ul>
    </>
  )
}

export default UseEffect