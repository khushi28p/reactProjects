import React, { useState } from 'react'
import { Button } from '@/components/ui/button';

const CoinFlipping = () => {
    const coinSides = [
        {
            side: 'Heads', 
            imgSrc: '/coin_head.png'
        },
        {
            side: 'Tails',
            imgSrc: '/coin_tail.png'
        }
    ];

    const [flipSide, setFlipSide] = useState(coinSides[1].imgSrc);
    const [flipping, setFlipping] = useState(false);

    const flipCoin = () => {
        if(flipping) return ;

        setFlipping(true);

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * coinSides.length);
            setFlipSide(coinSides[randomIndex].imgSrc);
            setFlipping(false);
        }, 1000);

        
    }
    
  return (
    <div className='flex flex-col justify-center items-center w-full min-h-screen py-8 text-white gap-10'>
      <h1 className='text-4xl font-bold'>Coin Flipping</h1>
      <div className='flex flex-col gap-14 bg-gray-500/10 px-10 py-8 rounded-lg'>    
        <div className={`size-48 transition-transform duration-1000 ${flipping ? 'animate-flip' : ''}`}>
            <img src={flipSide} alt="coin" className='size-full' />
        </div>
        
        <Button onClick={() => flipCoin()} className='text-lg bg-blue-500 hover:bg-blue-600 disabled:opacity-50' disabled={flipping}>
            {flipping ? "Flipping" : "Flip!!"}
            </Button>
      </div>
    </div>
  )
}

export default CoinFlipping
