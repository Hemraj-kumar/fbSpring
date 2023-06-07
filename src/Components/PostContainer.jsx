import React from 'react';
import Post from '../Components/Post.jsx'
import p from '../Components/Posts.js'
function PostContainer() {
    return (
        <div className='justify-between overflow-y-hidden h-96'>
            <div className=' h-96 overflow-y-scroll  [&>div]:flex-shrink-0 space-y-3'>
                {
                    p.map((key,index)=>(
                        <Post image={p[index].img} Name={p[index].name} pic={p[index].ava} />
                    ))
                }
                
            </div>
        </div>
    );
}

export default PostContainer;