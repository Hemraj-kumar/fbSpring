import React from "react";
import Layout from "./Layout";
import panel from '../Components/panelleft.js'
export default function LeftPanel(){
    return(
        <div>
            <div className="space-y-5 ml-3">
                {
                        panel.map((value ,index)=>(
                        
                            <Layout key={index.id} imgLink={panel[index].image} Names={panel[index].name}/> 
                        ))
                }
            </div>
        </div>
    );
}