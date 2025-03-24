import React from 'react'
import SUCCESSIMAGE from '../assest/Success.gif'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 py-4 mt-5 rounded'>
        <img src={SUCCESSIMAGE} alt="" width={160} height={170} className='transition-all mix-blend-multiply' />
        <p className='font-bold text-green-700 my-1 text-xl'>Payment Successfully</p>
        <Link to={"/order"} className='mt-5 mb-4 border-2 text-green-700 border-green-700 px-3 py-2 rounded font-semibold hover:bg-green-700 hover:text-white'>See Order</Link>
    </div>
  )
}

export default Success