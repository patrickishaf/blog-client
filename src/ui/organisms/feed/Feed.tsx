import './Feed.css';
import Post from '../../organisms/post/Post';
import useFetch from '../../../core/hooks/use-fetch';
import { PostModel } from '../../../core/models/Post';
import SERVER_URL from '../../../core/utils/config';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RouteNames from '../../../core/utils/route-names';

export default function Feed() {
    const { data, isLoading, error} = useFetch(`${SERVER_URL}/posts`);
    const navigateTo = useNavigate();

    // useEffect(() => {
    //     if (data?.type === 'error') {
    //         navigateTo(RouteNames.LOGIN);
    //     }
    // }, [data]);

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
                            : (data!.body as Array<PostModel>).map((post, index) => {
                                return (
                                    <Post
                                        key={index}
                                        id={post.id}
                                        date={post.timeCreated || 'u u u'}
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