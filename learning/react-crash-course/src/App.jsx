import React from 'react'

// return always has to be a single element (nesting depth doesn't matter)
// fragments can be used, though so:
// <>
// <div></div>
// <div></div>
// </>
// would be valid 
const App = () => {

  const names = ["tick", "trick", "track"]
  return (
    <>
        <div className='text-5xl'>App</div>
        <ul>
          { names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
    </>

  )
}

export default App