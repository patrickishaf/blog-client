import { FormEvent, useRef, useState } from 'react';
import './CreatePost.css';
import avatar from '../../../assets/vectors/avatar.svg';
import notification from '../../../assets/vectors/notification.svg';
import SERVER_URL from '../../../core/utils/config';

export default function CreatePost() {
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');

    const handleButtonClick = async () => {
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
    }

    return (
        <main className='create-post-root'>
            <nav className='row space-between create-post-navbar'>
                <p className='white-text'>New Post</p>
                <button className='form-button' id='publish-button' onClick={handleButtonClick}>Publish</button>
            </nav>
            <form className='create-post-form column'>
                <textarea className='create-post-title' name="postTitle" onChange={(e) => setPostTitle(e.target.value)} rows={2} placeholder='Title...' />
                <textarea name="postBody" className="create-post-body" cols={100} rows={10} onChange={(e) => setPostBody(e.target.value)} placeholder='Write your post here...'></textarea>
            </form>
        </main>
    );
}