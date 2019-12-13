import PostListTop from '../PostListTop/PostListTop';
import PostListItem from '../PostListItem/PostListItem';
function PostListWrap({posts}){
    return (
        <div className={'post-list-wrap'}>
            <PostListTop/>
            <ul>
                {
                    posts.map(post => (
                        <PostListItem title={post.title} url={post.url} written_date={'2019.09.01'} categories={post.categories} content={post.content}/>
                    ))
                }
            </ul>

        </div>
    );
}

export default PostListWrap;
