import React from 'react'

export default function App() {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>
        Welcome to AbiliLife
      </h1>
      <p>Your journey to a better life starts here.</p>
      <button onClick={() => alert('Button clicked!')}>Click Me</button>
    </div>
  )
}
