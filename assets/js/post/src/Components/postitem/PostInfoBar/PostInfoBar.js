import './PostInfoBar.css';
import _ from 'lodash';

function PostInfoBar(){
    return (
        <div className={'post-info-bar'}>
            <span>작성일 : {written_date}</span><br/><br/>

            <ul className={'category-list'}>
                {
                    _.map(categories, (category) => (
                        <li><a href="#">{category}</a></li>
                    ))
                }
            </ul>
        </div>
    );
}

export default PostInfoBar;
