import './Notification.css';
import bellIcon from '../../../assets/vectors/notification.svg';
import { forwardRef, LegacyRef, useRef } from 'react';

export interface NotificationProps {
    type: 'success' | 'failure';
    title: string;
    subtitle: string;
}

const Notification = forwardRef((data: NotificationProps, ref: LegacyRef<HTMLDivElement>) => {

    function getNotificationStyle(type: string) {
        if (type === 'success') {
            return {backgroundColor: '#6EEB83'}
        } else if (type === 'failure') {
            return {backgroundColor: '#FF5E5B'}
        }
    }

    return (
        <div ref={ref} style={getNotificationStyle(data.type)} className='notification-root row space-between'>
            <p className='notification-title'>
                {data.title.toUpperCase()}
                <br/>{data.subtitle}
            </p>
            <img src={bellIcon} alt="notification active" />
        </div>
    )
});

export default Notification;