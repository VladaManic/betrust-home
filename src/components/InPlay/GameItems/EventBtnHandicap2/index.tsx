import { EventBtnWrap } from './style'
import { MarketObj } from '../../../../types/interfaces'

interface Props {
    handicap: MarketObj
}

const EventBtnHandicap2 = ({ handicap }: Props) => {
    return (
        <EventBtnWrap className="event-btn">
            {handicap.event[1].price}
        </EventBtnWrap>
    )
}

export default EventBtnHandicap2
