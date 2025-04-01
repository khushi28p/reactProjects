import React from 'react'
import './App.css'
import { Button } from './components/ui/button'

const App = () => {
  return (
    <div className='text-3xl font-bold underline'>
      hello
      <Button variant='destructive'>Click here!</Button>
    </div>
  )
}

export default App
