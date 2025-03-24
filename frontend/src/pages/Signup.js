import React, { useState } from 'react'
import loginIcons from "../assest/sign.gif"
import { Link, useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import imageTobase64 from '../helpers/imageTobase64';
import SummaryApi from '../common';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        confirmPassword: "",
        profilePic: ""
    })

    const navigate=useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target

        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const handleUploadPic = async (e) => {
        const file = e.target.files[0]

        const imagePic = await imageTobase64(file)
        setData((prev) => {
            return {
                ...prev,
                profilePic: imagePic
            }
        })

    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        if(data.password === data.confirmPassword){

            const dataResponse = await fetch(SummaryApi.signUP.url,{
                method : SummaryApi.signUP.method,
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(data)
              })
        
              const dataApi = await dataResponse.json()

              if(dataApi.success){
                toast.success(dataApi.message)  
                navigate("/login")
              }

              if(dataApi.error){
                toast.error(dataApi.message)
              }
              
              
            
        }else{
            console.log("Please check password and confirm password");
            
        }
    
        }

       
    return (
        <section id='login'>
            <div className='mx-auto container p-4 '>
                <div className="bg-white p-2 py-5 px-5 w-full max-w-md mx-auto rounded-md">
                    <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                        <div>
                            <img src={data.profilePic || loginIcons} alt="login-icon" />
                        </div>
                        <form>
                            <label>
                                <div className='text-xs bg-opacity-80  bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
                                    Upload Pic
                                </div>
                                <input type="file" className='hidden' onChange={handleUploadPic} />
                            </label>
                        </form>
                    </div>

                    <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit} >
                        <div className='grid'>
                            <label>Name : </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='text'
                                    placeholder='enter your name '
                                    name='name'
                                    value={data.name}
                                    onChange={handleChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>

                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2'>
                                <input
                                    type='email'
                                    placeholder='enter email'
                                    name='email'
                                    value={data.email}
                                    onChange={handleChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent' />
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
                                    required
                                    name='password'

                                    className='w-full h-full outline-none bg-transparent' />
                                <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve) => !preve)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash />
                                            )
                                                :
                                                (
                                                    <FaEye />
                                                )
                                        }
                                    </span>
                                </div>
                            </div>

                        </div>

                        <div>
                            <label>confirm Password : </label>
                            <div className='bg-slate-100 p-2 flex'>
                                <input
                                    type={showConfirmPass ? "text" : "password"}
                                    placeholder='enter confirm password'
                                    value={data.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    name='confirmPassword'

                                    className='w-full h-full outline-none bg-transparent' />
                                <div className='cursor-pointer text-xl' onClick={() => setShowConfirmPass((preve) => !preve)}>
                                    <span>
                                        {
                                            showConfirmPass ? (
                                                <FaEyeSlash />
                                            )
                                                :
                                                (
                                                    <FaEye />
                                                )
                                        }
                                    </span>
                                </div>
                            </div>

                        </div>


                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>SignUp</button>

                    </form>
                    <p className='p-4 '>Already have an account? <Link to={"/login"} className='underline-offset-1 text-red-500 hover:text-red-600 hover:underline'>Login</Link></p>
                </div>

            </div>
        </section>
    )
}

export default SignUp