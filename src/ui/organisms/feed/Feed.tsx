import './Feed.css';
import posts from '../../../core/data/posts';
import Post, { PostProps } from '../../organisms/post/Post';
import useFetch from '../../../core/hooks/use-fetch';

export default function Feed() {
    const { data, isLoading, error} = useFetch('http://localhost:8000/posts');

    const BlogList = () => {
        if (error) {
            return (
                <div>
                    {
                        posts.map((post, index) => {
                            return (
                                <Post
                                    key={index}
                                    id={post.id}
                                    date={post.date}
                                    title={post.title}
                                    author={post.author}
                                    body={post.body}
                                    tags={post.tags} 
                                />
                            );
                        })
                    }
                </div>
            )
        } else if (data) {
            return (
                <div>
                    {
                        data.map((item, index) => {
                            const post = item as PostProps;
                            return (
                                <Post
                                    key={index}
                                    id={post.id}
                                    date={post.date}
                                    title={post.title}
                                    author={post.author}
                                    body={post.body}
                                    tags={post.tags} 
                                />
                            );
                        })
                    }
                </div>
            )
        } else {
            return <h3>Loading...</h3>
        }
    }

    return (
        <main className='feed-root'>
            <div className="category column">
                <div className='green-bar'></div>
                <p className='category-text'>Latest</p>
            </div>
            <BlogList />
        </main>
    );
}