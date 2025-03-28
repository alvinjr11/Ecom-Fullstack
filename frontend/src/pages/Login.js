import React, { useContext, useState } from 'react'
import loginIcons from "../assest/sign.gif"
import { Link, useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

const Login = () => {
    const [showPassword,setShowPassword]=useState(false)
    const [data,setData]=useState({
        email :"",
        password :""
    })
    const navigate=useNavigate()
    const {fetchUserDetails,fetchUserAddToCart}=useContext(Context)

  
    

    const handleChange =(e)=>{
        const {name,value}=e.target

        setData((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()

        const dataResponse = await fetch(SummaryApi.signIn.url,{
            method : SummaryApi.signIn.method,
            credentials:"include",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()

        if(dataApi.success){
            toast.success(dataApi.message)
            fetchUserDetails()
            navigate('/')
            fetchUserAddToCart()
        
        }

        if(dataApi.error){
            toast.error(dataApi.message)
        }
    }

  return (
   <section id='login'>
    <div className='mx-auto container p-4 '>
        <div className="bg-white p-2 py-5 px-5 w-full max-w-md mx-auto rounded-md">
            <div className='w-20 h-20 mx-auto '>
                <img src={loginIcons} alt="login-icon"/>
            </div>

            <form className='pt-6 flex flex-col gap-2'onSubmit={handleSubmit} >
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2'>
                                <input 
                                    type='email' 
                                    placeholder='enter email' 
                                    name='email'
                                     value={data.email}
                                     onChange={handleChange}
                                    className='w-full h-full outline-none bg-transparent'/>
                            </div>
                        </div>

                        <div>
                            <label>Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder='enter password'
                                    value={data.password}
                                   onChange={handleChange}
                                    name='password' 
                                    
                                    className='w-full h-full outline-none bg-transparent'/>
                                <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash/>
                                            )
                                            :
                                            (
                                                <FaEye/>
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                                Forgot password ?
                            </Link>
                        </div>

                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>

                    </form>
                    <p className='p-4 '>Don't have an account? <Link to={"/signup"} className='underline-offset-1 text-red-500 hover:text-red-600 hover:underline'>Signup</Link></p>
        </div>

    </div>
   </section>
  )
}

export default Login