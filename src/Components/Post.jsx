import React from 'react';
import share from '../images/share.png'
import comment from '../images/comment.png'
import likeb from '../images/lkbutton.png'
import like from '../images/like.png'
import avatar from '../images/avatar.png'
function Post({image,Name,pic}) {
    return ( 
        <div className='w-[120] bg-grey space-y-3  rounded-lg'> 
            {/* header */}
            <div className='flex flex-row items-center space-x-2 ml-3'>
                 <div className='mt-3'>
                    <img className='h-12 w-12' src={pic}/>
                 </div>
                 <p className='mt-3'>
                    {Name}
                 </p>
            </div>
            {/* desc */}
            <div className='ml-3  p-2'>
                <p>Love u Bujju...</p>
            </div>
            {/* img */}
            <div>
                <img src={image}/>
            </div>
            {/* like count */}
            <div className='ml-3 flex flex-row space-x-2 items-center'>
                <img className='h-8 w-8' src={like}/>
                <p>25</p>
            </div>
            {/* like share */}
            <div className='flex flex-row justify-evenly border-fbwhite border-t-[1px]' >
                <div className='flex flex-row items-center space-x-2 mb-2 mt-3'>
                    <img className='h-10 w-10' src={likeb}/>
                    <p>Like</p>
                </div>
                <div className='flex flex-row items-center space-x-2 mb-2 mt-3'>
                    <img className='h-10 w-10' src={comment}/>
                    <p>Comment</p>
                </div> 
                <div className='flex flex-row items-center space-x-2 mb-2 mt-3' >
                    <img className='h-10 w-10' src={share}/>
                    <p>Share</p>
                </div>
            </div>
            {/* comment box onClick */}
            <div>
                <div className='flex flex-row gap-2 p-2 border-fbwhite border-t-[1px]'>
                    <img  className="h-10 w-10 rounded-full ml-3 mt-2" 
                    src={avatar} />
                    <input type="text" placeholder='Enter Your Thoughts Here...'
                    className='h-10 w-[112] cursor-text bg-fbwhite p-2 rounded-lg 
                    mt-2' />
                </div>
            </div>
        </div>
     );
}

export default Post;