import React, {useState, useEffect, createContext} from "react";
import PostListWrap from '../postlist/PostListWrap/PostListWrap';

function getPosts(callback){
    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    };

    xhr.open('GET', '/posts.json');
    xhr.send();
}

const _ListContext = createContext({
    keyword: '',
    searchPosts: () => {},
    posts: []
});


function PostListContainer(){
    const [posts, setPosts] = useState([]);
    const [keyword, setKeyword] = useState('');
    const searchPosts = () => {
        getPosts((data) => {
            try {
                const json = JSON.parse(data);

                setPosts(
                    json.posts.filter((post) => {
                        return post.title.indexOf(keyword) !== -1;
                    })
                );

            } catch(err) {
                console.log(err);
            }
        });
    };




    useEffect(() => {
        getPosts((data) => {
            try {
                const json = JSON.parse(data);
                setPosts(json.posts);
            } catch(err) {
                console.log(err);
            }
        });

        console.log('검색 결과 ', posts);
    }, []);

    return (
        <_ListContext.Provider value={{searchPosts, posts, setKeyword}}>
            <PostListWrap/>
        </_ListContext.Provider>
    );
}

export default PostListContainer;
export const ListContext = _ListContext;
