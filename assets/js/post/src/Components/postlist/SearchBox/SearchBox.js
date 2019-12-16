import {createRef} from 'react';
import {ListContext} from '../../containers/PostListContainer';
import './SearchBox.css';

function SearchBox(){
    //const {searchPosts, setKeyword} = useContext(ListContext);
    const ref = createRef();
   // console.log(useContext(ListContext));

    return (
        <ListContext.Consumer>
            {
                ({searchPosts, posts, setKeyword}) => (
                    <div className="search-area">
                        <input type="text" className="search-inp" ref={ref} onChange={
                            () => {
                                const _keyword = ref.current.value;
                                setKeyword(_keyword);
                            }}/>
                        <button className="search-btn" onClick={() => {
                            searchPosts();
                            console.log(posts);
                        }}>검색</button>
                    </div>
                )
            }
        </ListContext.Consumer>
    );
}

export default SearchBox;
