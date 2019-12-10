import './PostListItem.css';

function PostListItem({title, url, written_date}){
    return (
        <li className={'post-list-item'}>
            <a href={url}>
                <h3>{title}</h3><br/><br/>
                <span>{written_date}</span>
            </a>
        </li>
    );
}

export default PostListItem;
