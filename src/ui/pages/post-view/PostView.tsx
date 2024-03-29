import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../core/hooks/use-fetch';
import SERVER_URL from '../../../core/utils/config';
import './PostView.css';

export default function PostView() {
    const { id } = useParams();
    console.log('THE ID OF THIS POST IS', id);
    const { data: post, isLoading, error} = useFetch(`${SERVER_URL}/posts/${id}`);

    useEffect(() => {
        console.log('THE POST IS:', post);
    }, [post]);

    return isLoading || error ? <p className='white-text'>{error?.name}</p> : (
        <div className='postview-root'>
            <h1 className='postview-title postview-title'>{post?.body.title}</h1>
            <p className="postview-metadata grey-text">
                written by {post?.body.author}
                <br />on {post?.body.date}
            </p>
            <p className='postview-body'>{post?.body.body}</p>
        </div>
    );
}