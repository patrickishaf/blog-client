import './Feed.css';
import Post from '../../organisms/post/Post';
import useFetchList from '../../../core/hooks/use-fetch-list';
import { PostModel } from '../../../core/models/Post';
import SERVER_URL from '../../../core/utils/config';

export default function Feed() {
    console.log(SERVER_URL)
    const { data, isLoading, error} = useFetchList(`${SERVER_URL}/posts`);

    return (
        <main className='feed-root'>
            <div className="category column">
                <div className='green-bar'></div>
                <p className='category-text'>Latest</p>
            </div>
            <section>
                {
                    isLoading 
                        ? <h3 className='white-text'>Loading...</h3>
                        : error
                            ? <div className='white-text'>Error</div>
                            : data!.map((item, index) => {
                                const post = item as PostModel;
                                return (
                                    <Post
                                        key={index}
                                        id={post.id}
                                        date={post.date || 'u u u'}
                                        title={post.title || ''}
                                        author={post.author?.name || ''}
                                        body={post.body || ''}
                                        tags={post.tags || []} 
                                    />
                                );
                            })
                }
            </section>
        </main>
    );
}