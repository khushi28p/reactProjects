import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ReactForm from './components/ReactForm'
import JokesGenerator from './components/JokesGenerator'
import PasswordValidator from './components/PasswordValidator'
import Board from './components/TicTacToeGame/Board'
import IPAddress from './components/IPAddressFinder/IPAddress'
import DiceRolling from './components/DiceRolling'
import RockPaperScissor from './components/RockPaperScissor'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div className="w-full min-h-screen py-8 bg-[#212121] text-white p-4 ">
      <Routes>
        <Route path="/form" element={<ReactForm />} />
        <Route path="/jokes" element={<JokesGenerator />} />
        <Route path='/password-validator' element={<PasswordValidator />} />
        <Route path='/tic-tac-toe' element={<Board />} />
        <Route path='/find-ip-address' element={<IPAddress />} />
        <Route path='/rock-paper-scissor' element={<RockPaperScissor />} />
        <Route path='/roll-dice' element={<DiceRolling/>} />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
    </div>
  )
}

export default App
