import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ReactForm from './components/ReactForm'
import JokesGenerator from './components/JokesGenerator'
import PasswordValidator from './components/PasswordValidator'
import TicTacToe from './components/TicTacToe'

const App = () => {
  return (
    <div className="w-full min-h-screen py-8 bg-[#212121] text-white p-4 ">
      <Routes>
        <Route path="/form" element={<ReactForm />} />
        <Route path="/jokes" element={<JokesGenerator />} />
        <Route path='/password-validator' element={<PasswordValidator />} />
        <Route path='/tic-tac-toe' element={<TicTacToe />} />
      </Routes>
    </div>
  )
}

export default App
