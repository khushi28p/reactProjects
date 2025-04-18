import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { Textarea } from '@/components/ui/textarea'

const JokesGenerator = () => {
    const [ joke, setJoke] = useState('');

    const getJoke = async() => {
        const res = await axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=1');
        const data = res.data;
        if(data.joke) {
            setJoke(data.joke);
        } else {
            setJoke('No joke found!');
        }
    }

  return (
    
        <div className='flex flex-col align-center items-center justify-center w-full h-full gap-4'>
        <h1 className="flex justify-center pb-6 text-4xl font-bold">Jokes Generator using React and JokeAPI</h1>
        <Textarea disabled type="text" placeholder="Generate a new Joke" value={joke} className='max-w-2xl' />
        <Button onClick={getJoke}>Generate</Button>
        </div>

        
    
  )
}

export default JokesGenerator
