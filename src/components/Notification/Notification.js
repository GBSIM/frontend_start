import './Notification.css';

export default function Notification(props) {
    return (
        <div className='notification' id={'notification-'+props.id}>
            <span className='notification-text'>
                {props.text}
            </span>
        </div>
    )
}

Notification.defaultProps = {
    text: '알림',
    id: '000'
}