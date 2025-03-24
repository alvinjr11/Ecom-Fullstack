import React from 'react'
import CANCELIMG from '../assest/cancel.gif'
import { Link } from 'react-router-dom'

const Cancel = () => {
    return (
        <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 py-4 mt-5 rounded'>
            <img src={CANCELIMG} alt="" width={160} height={170} className='transition-all mix-blend-multiply' />
            <p className='font-bold text-red-700 my-1 text-xl'>Payment Cancel</p>
            <Link to={"/cart"} className='mt-5 mb-5 border-2 border-red-700  px-3 py-2 rounded text-red-700 font-semibold hover:bg-red-700 hover:text-white'>Go To Cart</Link>
        </div>
      )
}

export default Cancel