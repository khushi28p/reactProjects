import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ReactForm from './components/ReactForm'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/form" element={<ReactForm />} />
      </Routes>
    </div>
  )
}

export default App
