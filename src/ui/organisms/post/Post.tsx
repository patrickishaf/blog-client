import Chip from '../../atoms/chip/Chip';
import './Post.css';
import { Link } from 'react-router-dom';
import RouteNames from '../../../core/utils/route-names';

export interface PostProps {
    id: string;
    title?: string;
    body?: string;
    date?: string;
    author?: string;
    tags?: string[];
}

export default function Post(props: PostProps) {
    const datePartitions = props.date?.split(' ');

    return (
        <Link className='undecorated-text' to={RouteNames.POST_VIEW + `/${props.id}`}>
            <div className='post-root row'>
                <div className='optional-date-display'>
                    <div className='date-container'>
                        <p>{datePartitions![1]}</p>
                        <p>{datePartitions![2].toUpperCase()}</p>
                    </div>
                </div>
                <div className='post'>
                    <p className='post-title'>{props.title}</p>
                    <p className='post-body'>{props.body}</p>
                    <p className='post-author desktop-only'>{props.author}</p>
                    <div className='date-author-row row space-between'>
                        <p className="post-author white-text">{`${datePartitions![1]} ${datePartitions![2].toUpperCase()} ${datePartitions![3]}`}</p>
                        <p className="post-author white-text">{props.author}</p>
                    </div>
                    <div className="chip-row row">
                        {
                            props.tags?.map((tag, index) => (
                                <Chip key={index} text={tag} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}