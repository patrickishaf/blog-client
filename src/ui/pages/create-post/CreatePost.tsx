import { FormEvent, useRef, useState } from 'react';
import './CreatePost.css';
import SERVER_URL from '../../../core/utils/config';
import { useNavigate } from 'react-router-dom';
import RouteNames from '../../../core/utils/route-names';

export default function CreatePost() {
    const [postTitle, setPostTitle] = useState<string>('');
    const [postBody, setPostBody] = useState<string>('');
    const [isEditing, setIsEditing] = useState<boolean>(true);
    const [isPosting, setIsPosting] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);
    const navigateTo = useNavigate();

    const handleButtonClick = async () => {
        if (postTitle.length === 0 && postBody.length === 0) {
            throw new Error('You can not publish an empty post');
        } else if (postTitle.length === 0) {
            throw new Error('The title fo your post can not be empty');
        } else if (postBody.length === 0) {
            throw new Error('The body of your post can not be empty');
        }
        setIsEditing(false);
        setIsPosting(true);
        setDisabled(true);
        try {
            const response = await fetch(`${SERVER_URL}/posts/new`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: postTitle,
                    body: postBody,
                }),
            });
            const result = await response.json();
            console.log('RESULT OF CREATING POST:', result);
            console.log('THE DATA TYPE OF THE POST IS:', typeof result);
            if (result.type === 'success') {
                navigateTo(RouteNames.TIMELINE)
            } else if (result.type === 'error') {
                throw new Error(result.body);
            }
        } catch (err) {
            const error = err as Error;
            console.log('RAN INTO AN ERROR WHILE CREATING A POST:', error.message);
        }
        setIsEditing(true);
        setIsPosting(false);
        setDisabled(false);
    }

    return (
        <main className='create-post-root'>
            <nav className='row space-between create-post-navbar'>
                <p className='white-text'>New Post</p>
                <button disabled={disabled} className='form-button' id='publish-button' onClick={handleButtonClick}>
                    {
                        (isEditing && !isPosting) ? 'Publish' : '...'
                    }
                </button>
            </nav>
            <form className='create-post-form column'>
                <textarea className='create-post-title' name="postTitle" onChange={(e) => setPostTitle(e.target.value)} rows={2} placeholder='Title...' />
                <textarea name="postBody" className="create-post-body" cols={100} rows={10} onChange={(e) => setPostBody(e.target.value)} placeholder='Write your post here...'></textarea>
            </form>
            <button disabled={disabled} className='publish-button' onClick={handleButtonClick}>
                {
                    (isEditing && !isPosting) ? 'Publish' : '...'
                }
            </button>
        </main>
    );
}