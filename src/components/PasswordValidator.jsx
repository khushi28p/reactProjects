import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import validator from 'validator'

const PasswordValidator = () => {
    const [ errorMessage, setErrorMessage] = useState('');
    const validate = (value) => {
        if(validator.isStrongPassword(value, {minLength: 8, minLowerCase: 1, minUpperCase: 1, minNumbers: 1, minSymbols: 1
        })){
            setErrorMessage('Password is strong!');
        } else{
            setErrorMessage('Password is weak!');
        }
    }

  return (
    <div className='flex flex-col align-center items-center justify-center w-full h-full gap-4'>
      <h1>Check your password'd strength</h1>
      <Input type="text" 
      onChange={(e) => validate(e.target.value)} placeholder="Generate a new Joke" className='max-w-2xl' />
      {errorMessage && <p className='font-bold text-red-600'>{errorMessage}</p>}
    </div>
  )
}

export default PasswordValidator
