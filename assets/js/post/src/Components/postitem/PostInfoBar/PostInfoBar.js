import './PostInfoBar.css';

function PostInfoBar(){
    return (
        <div className={'post-info-bar'}>
            <span>작성일 : 2001 . 19 . 11</span><br/><br/>
            <ul className={'category-list'}>
                <li><a href="#">master sword</a></li>
                <li><a href="#">master</a></li>
                <li><a href="#">word</a></li>
            </ul>
        </div>
    );
}

export default PostInfoBar;
