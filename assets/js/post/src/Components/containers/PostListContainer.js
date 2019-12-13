import React, {useState, useEffect} from "react";
import PostListWrap from '../postlist/PostListWrap/PostListWrap';

function PostListContainer(){
    const [posts, setPosts] = useState([]);
    const xhr = new XMLHttpRequest();

    useEffect(() => {
        xhr.onload = () => {
            if (xhr.readyState === 4) {
                const json = JSON.parse(xhr.responseText);
                setPosts(json.posts || []);
            }
        };

        xhr.open('GET', '/posts.json');
        xhr.send();
    }, [posts.length]);

    return (
      <PostListWrap posts={posts}/>
    );
}

export default PostListContainer;
