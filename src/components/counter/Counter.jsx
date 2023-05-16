import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
 
  return (
    <div>
        <div className='text-center'>
        <h1 className='text-center'>Counter: {count}</h1>
        <button  className='btn btn-success br-2'>increase</button>
        <button  className='btn btn-info m-3 br-2'>reset</button>
        <button  className='btn btn-danger br-2'>decrease</button>
        
    </div>
    </div>
  )
}

export default Counter