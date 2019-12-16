import './PostListTop.css';
import SearchBox from '../SearchBox/SearchBox';

function PostListTop(){
    return (
        <div className={'post-list-top'}>
            <h2>포스팅 목록</h2>
            <SearchBox/>
        </div>
    );
}

export default PostListTop;
