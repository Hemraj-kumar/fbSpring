import React from 'react';
import logo from '../images/logo.png'
export default function SignIn() {
    return(
        <div> 
            <div className='h-24 w-screen bg-blue'>
                <nav className='flex flex-row justify-between'>
                    <div className='flex flex-row items-center space-x-2 
                    p-2 ' >
                        <img  className='h-16 w-16' src={logo}/>
                        <p className='text-white 
                        font-semibold text-3xl'>facebook</p>
                    </div>
                    <div className='flex flex-row space-x-2 p-6 items-center  '>
                        <button className='bg-white p-2 w-20 rounded-lg'>SignIn</button>
                        <button className='bg-white p-2 w-20 rounded-lg'>Account</button>
                    </div>
                </nav>
            </div>
            <div className='flex flex-row space-x-4 justify-center items-center h-screen'>
                <div>
                    <p className='text-3xl text-blue 
                    text-center font-bold'>facebook</p>
                    <p className='text-xl text-blue text-center font-sm'>connect people</p>
                </div>
                <div className='h-60 w-[560px] flex flex-col space-y-2 bg-grey rounded-lg p-4 justify-center
                items-center'>
                    {/* <div> */}
                        <p>UserName</p> 
                        <input className='h-12 w-60 rounded-lg p-2' placeholder='Enter Your Username/Email' name='username'/>
                        <p>Password</p>
                        <input className='h-12 w-60 rounded-lg p-2' placeholder='Enter Your Password' name='password'/>
                        <button type='submit' className='bg-blue p-2 w-20 rounded-lg'>Login</button>
                    {/* </div> */ }

                </div>
            </div>
        </div>
    );
}