import React from 'react'

const Square = (props) => {
  return (
    <div onClick={props.onClick} className='flex h-30 w-30 border justify-center align-center items-center'>
      <h5>{props.value}</h5>
    </div>
  )
}

export default Square
