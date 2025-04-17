import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaWpforms,
  FaRegLaughSquint,
  FaRegAddressCard
} from 'react-icons/fa'
import {
  GiCoinflip,
  GiPerspectiveDiceSixFacesOne,
  GiTicTacToe
} from 'react-icons/gi'
import {
  MdOutlineQrCode2,
  MdOutlineQuiz,
  MdOutlineLyrics,
  MdPassword
} from 'react-icons/md'
import { SiRiotgames } from 'react-icons/si'
import { RiTodoLine } from 'react-icons/ri'

const projects = [
  { name: 'Form Validation', path: '/form', icon: <FaWpforms size={40} /> },
  { name: 'Jokes Generator', path: '/jokes', icon: <FaRegLaughSquint size={40} /> },
  { name: 'Password Validator', path: '/password-validator', icon: <MdPassword size={40} /> },
  { name: 'Tic Tac Toe', path: '/tic-tac-toe', icon: <GiTicTacToe size={40} /> },
  { name: 'Find IP Address', path: '/find-ip-address', icon: <FaRegAddressCard size={40} /> },
  { name: 'Rock Paper Scissors', path: '/rock-paper-scissor', icon: <SiRiotgames size={40} /> },
  { name: 'Dice Rolling', path: '/roll-dice', icon: <GiPerspectiveDiceSixFacesOne size={40} /> },
  { name: 'Todo List', path: '/todo-list', icon: <RiTodoLine size={40} /> },
  { name: 'Take Quiz', path: '/take-quiz', icon: <MdOutlineQuiz size={40} /> },
  { name: 'Flip Coin', path: '/flip-coin', icon: <GiCoinflip size={40} /> },
  { name: 'Find Lyrics', path: '/find-lyrics', icon: <MdOutlineLyrics size={40} /> },
  { name: 'Generate QR Code', path: '/generate-qr-code', icon: <MdOutlineQrCode2 size={40} /> },
]

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#212121] text-white py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">
        My React Projects
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Link
            to={project.path}
            key={index}
            className="flex flex-col items-center justify-center bg-[#1f1f1f] hover:bg-[#292929] border border-gray-700 rounded-2xl p-8 shadow-lg transition-transform transform hover:scale-[1.03]"
          >
            <div className="text-white mb-4">{project.icon}</div>
            <h2 className="text-xl font-semibold text-center mb-1">
              {project.name}
            </h2>
            <p className="text-sm text-gray-400 text-center">Click to open</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
