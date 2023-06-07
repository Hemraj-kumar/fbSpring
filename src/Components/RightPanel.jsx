import React from "react";
import panel from "./panelright";
export default function RightPanel(){
    return(
        <div className="space-y-4">
            <p className="ml-[350px] text-xl font-semibold">Contacts</p>
            <div className="space-y-5 ml-[350px]">
                {
                        panel.map((value ,index)=>(
                            <div className="flex flex-row space-x-2 items-center ">
                            <img className="h-10 w-10" src={panel[index].image}/>
                            <p>{panel[index].name}</p>
                            </div>
                        ))
                }
            </div>
        </div>
    );
}