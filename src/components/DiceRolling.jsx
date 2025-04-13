import React, { useState } from 'react'
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from 'react-icons/fa'

const sides = [<FaDiceOne />, <FaDiceTwo />, <FaDiceThree />, <FaDiceFour />, <FaDiceFive />, <FaDiceSix />];

const DiceRolling = () => {
    const [die1, setDie1] = useState(sides[0]);
    const [die2, setDie2] = useState(sides[0]);
    const [isRolling, setIsRolling] = useState(false);

    const roll = () => {
        setIsRolling(true);
        setTimeout(() => {
            const random1 = Math.floor(Math.random() * sides.length);
            const random2 = Math.floor(Math.random() * sides.length);
            setDie1(sides[random1]);
            setDie2(sides[random2]);
            setIsRolling(false);
        }, 1000); // Set the duration of the shake animation
        
    }

  return (
    <div className='flex flex-col justify-center items-center gap-4 h-screen'>
      <h1 className='text-4xl font-bold'>Dice Roll</h1>
      <div className='flex justify-center items-center gap-20 text-9xl py-12'>
        <div className={`${isRolling ? 'animate-shake' : ''}`}>{die1}</div>
        <div className={`${isRolling ? 'animate-shake' : ''}`}>{die2}</div>
      </div>
      <button className='bg-red-500 px-8 py-2 font-semibold text-lg rounded-lg' onClick={roll} disabled={isRolling}>
        {isRolling ? 'Rolling...' : 'Roll Dice'}
      </button>
    </div>
  )
}

export default DiceRolling
