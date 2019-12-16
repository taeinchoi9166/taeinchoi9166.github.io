import PostListTop from '../PostListTop/PostListTop';
import PostLists from '../PostLists/PostLists';

function PostListWrap(){

    return (
        <div className={'post-list-wrap'}>
            <PostListTop/>
            <PostLists/>
        </div>
    );
}

export default PostListWrap;
