import { EventBtnWrap } from './style'
import { MarketObj } from '../../../../types/interfaces'

interface Props {
    singleMarket: MarketObj
}

const EventBtn1 = ({ singleMarket }: Props) => {
    return (
        <EventBtnWrap className="event-btn">
            {singleMarket.event[0].price}
        </EventBtnWrap>
    )
}

export default EventBtn1
