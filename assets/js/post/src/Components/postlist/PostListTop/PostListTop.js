import './PostListTop.css';

function PostListTop(){
    return (
        <div className={'post-list-top'}>
            <h2>포스팅 목록</h2>
            <div className="search-area">
                <input type="text" className="search-inp"/>
                <button className="search-btn">검색</button>
            </div>
        </div>
    );
}

export default PostListTop;
