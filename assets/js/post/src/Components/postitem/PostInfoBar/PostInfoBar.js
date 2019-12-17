import './PostInfoBar.css';
import _ from 'lodash';

function PostInfoBar(){
    return (
        <div className={'post-info-bar'}>
            <span>작성일 : {new Date(written_date).toLocaleString()}</span><br/><br/>

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
