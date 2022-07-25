import { useParams } from 'react-router-dom';
import posts from '../../../core/data/posts';
import useFetch from '../../../core/hooks/use-fetch';
import './PostView.css';

export default function PostView() {
    const { id } = useParams();
    const post = posts[parseInt(id ?? '0')];
    const { data, isLoading, error} = useFetch(`http://localhost:8000/posts/${id}`);

    return (
        <div className='postview-root'>
            <h1 className='postview-title postview-title'>{post.title}</h1>
            <p className="postview-metadata grey-text">
                written by {post.author}
                <br />on {post.date}
            </p>
            <p className='postview-body'>{post.body}</p>
        </div>
    );
}