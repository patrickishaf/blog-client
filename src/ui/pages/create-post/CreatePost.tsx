import { FormEvent, useState } from 'react';
import './CreatePost.css';
import avatar from '../../../assets/vectors/avatar.svg';
import notification from '../../../assets/vectors/notification.svg';

export default function CreatePost() {
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');

    const submitNewPostForm = (event: FormEvent) => {
        event.preventDefault();
        console.log('title:', postTitle, 'body:', postBody);
    }

    return (
        <main className='create-post-root'>
            <nav className='row space-between create-post-navbar'>
                <p className='white-text'>New Post</p>
                <img className='create-post-avatar' src={avatar} alt="logged in user avatar" />
            </nav>
            <form className='create-post-form column' onSubmit={submitNewPostForm}>
                <textarea className='create-post-title' name="postTitle" onChange={(e) => setPostTitle(e.target.value)} rows={2} placeholder='Title' />
                <textarea name="postBody" className="create-post-body" cols={100} rows={10} onChange={(e) => setPostBody(e.target.value)} placeholder='Write your post here...'></textarea>
            </form>
        </main>
    );
}