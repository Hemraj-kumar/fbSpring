import React from "react";
import Status from '../Components/StatusPanel.jsx'
export default function MiddlePanel(){
    return(
        <div className="flex justify-between overflow-x-hidden w-full ">
            <div className="flex w-full overflow-x-scroll  [&>div]:flex-shrink-0 
            space-x-2 ">
                <Status/>
                <Status/>
                <Status/>
                <Status/>
                <Status/><Status/><Status/><Status/><Status/>
            </div>
        </div>
    );
}