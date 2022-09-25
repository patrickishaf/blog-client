import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useHttpRequest from '../../../core/hooks/use-http-request';
import SERVER_URL from '../../../core/utils/config';
import RouteNames from '../../../core/utils/route-names';
import '../create-post/CreatePost.css';

export default function EditPost({ id }: { id: string }) {
    const { data, isLoading, error} = useHttpRequest(`${SERVER_URL}/posts/${id}`);
    const [postTitle, setPostTitle] = useState<string>('');
    const [postBody, setPostBody] = useState<string>('');
    const [isEditing, setIsEditing] = useState<boolean>(true);
    const [isPosting, setIsPosting] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);
    const navigateTo = useNavigate();

    useEffect(() => {
        if (data?.type === 'success') {
            setPostTitle(data.body.title);
            setPostBody(data.body.body);
        }
    }, [data]);

    async function handleButtonClick() {
        setIsEditing(false);
        setIsPosting(true);
        setDisabled(true);
        try {
            const response = await fetch(`${SERVER_URL}/posts/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ id, title: postTitle, body: postBody })
            });
            const data = await response.json();
            if (data.type === 'success') {
                navigateTo(`${RouteNames.POST_VIEW}/${id}`);
            } else if (data.type === 'error') {
                throw new Error(data.body);
            }
        } catch (err) {
            const error = err as Error;
            console.log('Ran into an error while updating the post:', error.message);
        }
        setIsEditing(true);
        setIsPosting(false);
        setDisabled(false);
    }

    return (
        <main className='create-post-root'>
            <nav className='row space-between create-post-navbar'>
                <p className='white-text'>Edit Post</p>
                <button disabled={disabled} className='form-button' id='publish-button' onClick={handleButtonClick}>
                    {
                        (isEditing && !isPosting) ? 'Save' : '...'
                    }
                </button>
            </nav>
            <form className='create-post-form column'>
                <textarea className='create-post-title' name="postTitle" onChange={(e) => setPostTitle(e.target.value)} rows={2} placeholder='Title...' />
                <textarea name="postBody" className="create-post-body" cols={100} rows={10} onChange={(e) => setPostBody(e.target.value)} placeholder='Write your post here...'></textarea>
            </form>
            <button disabled={disabled} className='publish-button' onClick={handleButtonClick}>
                {
                    (isEditing && !isPosting) ? 'Save' : '...'
                }
            </button>
        </main>
    );
}