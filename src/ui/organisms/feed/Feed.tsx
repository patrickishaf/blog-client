import react from 'react';
import './Feed.css';
import posts from '../../../core/data/posts';
import Post from '../../organisms/post/Post';

export default function Feed() {
    return (
        <main className='feed-root'>
            <div className="category column">
                <div className='green-bar'></div>
                <p className='category-text'>Latest</p>
            </div>
            {
                posts.map((post, index) => (
                    <Post key={index} date={post.date} title={post.title} author={post.author} body={post.body} tags={post.tags} />
                ))
            }
        </main>
    )
}