import { observer } from 'mobx-react'

import { EventBtnWrap } from './style'
import { MarketObj } from '../../../../types/interfaces'

interface Props {
    singleMarket: MarketObj
}

const EventBtn2 = ({ singleMarket }: Props) => {
    return (
        <EventBtnWrap className="event-btn">
            {singleMarket.event[1].price}
        </EventBtnWrap>
    )
}

export default observer(EventBtn2)
