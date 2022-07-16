import Chip from '../../atoms/chip/Chip';
import './Post.css';

interface PostProps {
    title: string;
    body: string;
    date: string;
    author: string;
    tags: string[];
}

export default function Post(props: PostProps) {
    const datePartitions = props.date.split(' ');
    return (
        <div className='post-root row'>
            <div className='optional-date-display'>
                <div className='date-container'>
                    <p>{datePartitions[0]}</p>
                    <p>{datePartitions[1].toUpperCase()}</p>
                </div>
            </div>
            <div className='post'>
                <p className='post-title'>{props.title}</p>
                <p className='post-body'>{props.body}</p>
                <p className='post-author desktop-only'>{props.author}</p>
                <div className='date-author-row row space-between'>
                    <p className="post-author white-text">{props.date.toUpperCase()}</p>
                    <p className="post-author white-text">{props.author}</p>
                </div>
                <div className="chip-row row">
                    {
                        props.tags.map((tag) => (
                            <Chip text={tag} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}