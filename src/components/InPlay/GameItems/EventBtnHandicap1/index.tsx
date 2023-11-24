import { EventBtnWrap } from './style'
import { MarketObj } from '../../../../types/interfaces'

interface Props {
    handicap: MarketObj
}

const EventBtnHandicap1 = ({ handicap }: Props) => {
    return (
        <EventBtnWrap className="event-btn">
            {handicap.event[0].price}
        </EventBtnWrap>
    )
}

export default EventBtnHandicap1
