import react from 'react';
import './Notification.css';
import bellIcon from '../../../assets/vectors/notification.svg';

interface NotificationProps {
    type: 'success' | 'failure';
    title: string;
    subtitle: string;
}

export default function Notification(data: NotificationProps) {
    return (
        <div style={getNotificationStyle(data.type)} className='notification-root row space-between'>
            <p className='notification-title'>
                {data.title.toUpperCase()}
                <br/>{data.subtitle}
            </p>
            <img src={bellIcon} alt="notification active" />
        </div>
    )
}

function getNotificationStyle(type: string) {
    if (type === 'success') {
        return {backgroundColor: '#6EEB83'}
    } else if (type === 'failure') {
        return {backgroundColor: '#FF5E5B'}
    }
}