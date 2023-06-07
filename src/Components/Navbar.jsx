import React from "react";
import logo from '../images/logo.png'
import home from '../images/home.svg'
import groups from '../images/groups.svg'
import market from '../images/market.svg'
import watch from '../images/watch.svg'
import page from '../images/pages.svg'
import avatar from '../images/avatar.png'
import mess from '../images/messengerkids.png'
export default function Navbar(){
    return (
        <div className="grid grid-cols-3 " >
            <div className="mx-auto flex flex-row justify-start items-center bg-fbwhite h-24 w-screen">
                <img className="h-24 w-24 p-2" src={logo}/>
                <input className="h-8 w-[50] rounded-full font-md bg-grey p-4"type="text" placeholder="search..."/>  
            </div>
            <div className="flex flex-row items-center justify-evenly mt-8 space-x-6">
                <img className="h-24 w-24 " src={home} />
                <img className="h-24 w-24 " src={watch}/>
                <img className="h-24 w-24 " src={page}/>
                <img className="h-24 w-24 " src={market}/>
                <img className="h-24 w-24 " src={groups}/>
            </div>
            <div className="flex flex-row justify-center items-center space-x-2 mb-8 ml-8">
                <img className="h-10 w-10 rounded-full transition-colors
                duration-500 border-2 border-red-400" src={avatar}/>
                <p>Bujju</p>
                <img className= "h-10 w-10 bg-fbwhite"  src={mess}/>
            </div>
        </div>
    );
}