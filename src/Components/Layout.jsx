    import React from "react";
export default function Layout({imgLink,Names}){
    return(
        <div className="flex flex-row items-center space-x-3 ">
            <div> 
                {/* for the images showcasing panel */}
                <img className="h-12 w-12" src={imgLink}/>
            </div>
            <div>
                {/* for the title showcasing panel  */}
                {Names}
            </div>
        </div>
        
    );
}