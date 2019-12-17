import './PostListItem.css';

function PostListItem({title, url, written_date, content, categories}){
    const maxContentLength = 200;
    const decodedContent = decodeURIComponent(content.replace(/\+/g,'%20'));

    return (
        <li className={'post-list-item'}>
            <a href={url}>
                <h3>{title}</h3><br/><br/>
                <p>
                    {decodedContent.substring(0,maxContentLength)}{decodedContent.length > maxContentLength ? '...' : '' }
                </p>
                <ul className={'categories'}>
                    {
                        categories.map(category => (
                            <li className={'category'}>{category}</li>
                        ))
                    }
                </ul>
                <br/>
                <br/>
                <span className={'date'}>{ written_date }</span>

            </a>
        </li>
    );
}

export default PostListItem;
