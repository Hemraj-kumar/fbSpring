import React from 'react';
import LeftPanel from './LeftPanel';
import MiddlePanel from './MIddlePanel';
import RightPanel from './RightPanel';
import UploadPanel from './UploadPanel';
import PostContainer from './PostContainer';
export default function Home(){
    return(
        <div className='grid grid-cols-3'>
            <div>
                <LeftPanel/>
            </div>
                <div className=' space-y-3'>
                    <MiddlePanel/>
                    <UploadPanel/>
                    <PostContainer/>
                </div>
            <div>
                <RightPanel />
            </div>
        </div>

    );
}