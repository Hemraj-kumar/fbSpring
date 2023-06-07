import React from 'react';
import avatar from '../images/avatar.png'
import video from '../images/video.png'
import feeling from '../images/feelings.png'
import image from '../images/image.png'
function UploadPanel() {
    return (
        <div className='h-36 w-[120] mt-4 bg-fbwhite rounded-lg space-y-2'>
            <div className='flex flex-row gap-2'>
                <img  className="h-12 w-12 rounded-full ml-3 mt-3" 
                src={avatar} />
                <input type="text" placeholder='Enter Your Thoughts Here...'
                className='h-12 w-[112] cursor-text bg-fbwhite p-2 rounded-lg 
                mt-3' />
            </div>

            <hr className='h-px w-[120] bg-fbwhite'></hr>

            <div className='flex flex-row gap-4 space-y-2 justify-evenly items-center' >
                <div className='flex flex-row space-x-4 items-center'>
                    <img className='h-10 w-10 ' src={video}/>
                    <p>Upload Video</p>
                </div>
                <div className='flex flex-row space-x-4 items-center'>
                    <img className='h-10 w-10 ' src={image}/>
                    <p>Image/Photo</p>
                </div>
                <div className='flex flex-row space-x-4 items-center'>
                    <img className='h-10 w-10 ' src={feeling}/>
                    <p>Feeling/Activity</p>
                </div>

            </div>
        </div>
    );
}

export default UploadPanel