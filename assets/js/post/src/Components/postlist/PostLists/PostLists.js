import {useEffect, useContext} from 'react';
import {ListContext} from '../../containers/PostListContainer';
import PostListItem from "../PostListItem/PostListItem";

function PostLists(){
    const {posts} = useContext(ListContext);

    useEffect(()=>{
        console.log(posts);
    }, [posts]);

    return (
        <ul>
            {
                posts.map(post => {
                    const _date = new Date(post.written_date);
                    return (
                        <PostListItem title={post.title} url={post.url} written_date={_date.toLocaleString()} categories={post.categories} content={post.content}/>
                    );
                })
            }
        </ul>
    );
}

export default PostLists;
