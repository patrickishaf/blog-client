import NavDrawerItem from '../../molecules/navdrawer-item/NavDrawerItem';
import './NavDrawer.css';
import avatar from '../../../assets/vectors/avatar.svg';
import search from '../../../assets/vectors/search.svg';
import trending from '../../../assets/vectors/trending_up.svg';
import addRounded from '../../../assets/vectors/add_rounded.svg';
import { useNavigate } from 'react-router-dom';
import RouteNames from '../../../core/utils/route-names';

export default function NavDrawer() {
    const navigateTo = useNavigate();
    return (
        <aside className='drawer-root column-responsive'>
            <div className="inner">
                <img className='avatar' src={avatar} alt="logged in user avatar" />
                <div className="search">
                    <NavDrawerItem iconPath={search} label='search' />
                </div>
                <div className="trending">
                    <NavDrawerItem iconPath={trending} label='trending' />
                </div>
                <div className="create" onClick={ () => navigateTo(RouteNames.CREATE_POST) }>
                    <NavDrawerItem iconPath={addRounded} label='create' />
                </div>
            </div>
        </aside>
    )
}