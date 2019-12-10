import PostTitle from '../PostTitle/PostTitle';
import PostInfoBar from '../PostInfoBar/PostInfoBar';
import PostNavigation from '../PostNavigation/PostNavigation';
import './PostContentWrap.css';

function PostContentWrap(){
    return (
        <div className={'post-wrap'}>
            <PostTitle/>
            <PostInfoBar/>
            <div className={'post-content'} dangerouslySetInnerHTML={{__html:content}}>
            </div>
            <PostNavigation/>
        </div>
    );
}

export default PostContentWrap;
