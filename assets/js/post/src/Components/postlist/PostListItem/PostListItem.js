import './PostListItem.css';

function PostListItem({title, url, written_date, content, categories}){
    const maxContentLength = 200;
    const decodedContent = decodeURIComponent(content.replace(/\+/g,'%20'));

    return (
        <li className={'post-list-item'}>
            <a href={url}>
                <h3>{title}</h3><br/><br/>
                <span>{written_date}</span>
                <ul>
                    {
                        categories.map(category => (
                            <li>{category}</li>
                        ))
                    }
                </ul>
                <p>
                    {decodedContent.substring(0,maxContentLength)}{decodedContent.length > maxContentLength ? '...' : '' }
                </p>
            </a>
        </li>
    );
}

export default PostListItem;
