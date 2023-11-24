import { EventBtnWrap } from './style'
import { EventObj } from '../../../../types/interfaces'

interface Props {
    singleEvent: EventObj
}

const EventBtnWinner = ({ singleEvent }: Props) => {
    return (
        <EventBtnWrap className="event-btn">{singleEvent.price}</EventBtnWrap>
    )
}

export default EventBtnWinner
