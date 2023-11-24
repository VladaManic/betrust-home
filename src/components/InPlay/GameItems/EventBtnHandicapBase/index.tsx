import { EventBtnWrap } from './style'
import { MarketObj } from '../../../../types/interfaces'

interface Props {
    handicap: MarketObj
}

const EventBtnHandicapBase = ({ handicap }: Props) => {
    return <EventBtnWrap className="event-btn">{handicap.base}</EventBtnWrap>
}

export default EventBtnHandicapBase
