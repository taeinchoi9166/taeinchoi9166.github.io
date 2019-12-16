import './PostNavigation.css';

function PostNavigation(){
    return (
        <div className={'post-navigation'}>
            <a className={'page-btn'} href={'#'} onClick={() => {
                window.history.back();
            }}>
                <div className={"page-btn-img"}></div>
                <div className={"page-btn-text"}>이전 페이지로</div>
            </a>

            {/*<a className={'page-btn'} href={'#'}>*/}
            {/*    <div className={"page-btn-text"}>다음 글 보기</div>*/}
            {/*    <div className={"page-btn-img"}></div>*/}
            {/*</a>*/}
        </div>
    );
}

export default PostNavigation;
