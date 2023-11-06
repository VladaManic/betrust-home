import bellIcon from '../../../assets/img/bell.svg'
import {
    NotificationsWrap,
    CountWrap,
    CountValue,
    NotificationsBellWrap,
    NotificationsBell,
} from './style'

const Notifications = () => {
    return (
        <NotificationsWrap>
            <CountWrap>
                <CountValue>1</CountValue>
            </CountWrap>
            <NotificationsBellWrap>
                <NotificationsBell src={bellIcon} alt="Notification bell" />
            </NotificationsBellWrap>
        </NotificationsWrap>
    )
}

export default Notifications
