import {createRef, useEffect} from 'react'
import PostTitle from '../PostTitle/PostTitle';
import PostInfoBar from '../PostInfoBar/PostInfoBar';
import PostNavigation from '../PostNavigation/PostNavigation';
import './PostContentWrap.css';
import './github-markdown.css';

function PostContentWrap(){
    const postRef = createRef();

    useEffect(()=>{
      postRef.current.style.opacity = 1;
    },[]);

    return (
        <div className={'post-wrap'} ref={postRef}>
            <PostTitle/>
            <PostInfoBar/>
            <div className={'post-content markdown-body'} dangerouslySetInnerHTML={{__html:content}}>

            </div>
        </div>
    );
}

export default PostContentWrap;
