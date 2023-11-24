import { EventBtnWrap } from './style'
import { MarketObj } from '../../../../types/interfaces'

interface Props {
    singleMarket: MarketObj
}

const EventBtnBase = ({ singleMarket }: Props) => {
    return (
        <EventBtnWrap className="event-btn">{singleMarket.base}</EventBtnWrap>
    )
}

export default EventBtnBase
