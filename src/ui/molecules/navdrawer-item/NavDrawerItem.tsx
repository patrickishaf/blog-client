import './NavDrawerItem.css';

interface NavDrawerItemProps {
    iconPath: string;
    label: string;
}

export default function NavDrawerItem(props: NavDrawerItemProps) {
    return (
        <div className='drawer-item-root'>
            <img className='drawer-item-image' src={props.iconPath} alt="Blog home option" />
            <p className='drawer-item-label white-text'>{props.label}</p>
        </div>
    )
}