import react from 'react';
import './Timeline.css';
import NavDrawer from '../../organisms/navdrawer/NavDrawer';
import Feed from '../../organisms/feed/Feed';

export default function Timeline() {
    return(
        <div className='timeline-root row'>
            <NavDrawer/>
            <Feed />
        </div>
    )
}