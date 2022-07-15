import react from 'react';
import NavDrawerItem from '../../molecules/navdrawer-item/NavDrawerItem';
import './NavDrawer.css';
import avatar from '../../../assets/vectors/avatar.svg';
import search from '../../../assets/vectors/search.svg';
import trending from '../../../assets/vectors/trending_up.svg';
import addRounded from '../../../assets/vectors/add_rounded.svg';

export default function NavDrawer() {
    return (
        <aside className='drawer-root'>
            <div className='drawer-child'>
                <img className='avatar' src={avatar} alt="logged in user avatar" />
                <NavDrawerItem iconPath={search} label='search' />
                <NavDrawerItem iconPath={trending} label='trending' />
            </div>
            <NavDrawerItem iconPath={addRounded} label='create' />
        </aside>
    )
}