import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import ReactForm from './components/ReactForm'
import JokesGenerator from './components/JokesGenerator'
import PasswordValidator from './components/PasswordValidator'
import Board from './components/TicTacToeGame/Board'
import IPAddress from './components/IPAddressFinder/IPAddress'
import DiceRolling from './components/DiceRolling'
import RockPaperScissor from './components/RockPaperScissor'
import TodoList from './components/TodoList'
import QuizApp from './components/QuizApp'
import CoinFlipping from './components/CoinFlipping'
import LyricsFinder from './components/LyricsFinder'
import QRCodeGenerator from './components/QRCodeGenerator'

const App = () => {
  return (
    <div className="w-full min-h-screen py-8 bg-[#212121] text-white p-4 ">
      <Routes>
      <Route path="/" element={<Dashboard />} />
        <Route path="/form" element={<ReactForm />} />
        <Route path="/jokes" element={<JokesGenerator />} />
        <Route path='/password-validator' element={<PasswordValidator />} />
        <Route path='/tic-tac-toe' element={<Board />} />
        <Route path='/find-ip-address' element={<IPAddress />} />
        <Route path='/rock-paper-scissor' element={<RockPaperScissor />} />
        <Route path='/roll-dice' element={<DiceRolling />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path='/take-quiz' element={<QuizApp />} />
        <Route path='/flip-coin' element={<CoinFlipping />} />
        <Route path='/find-lyrics' element={<LyricsFinder />} />
        <Route path='/generate-qr-code' element={<QRCodeGenerator />} />
      </Routes>
    </div>
  )
}

export default App
