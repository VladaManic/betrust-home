import { observer } from 'mobx-react'

import { EventUnderWrap } from './style'
import { MarketObj } from '../../../../types/interfaces'

interface Props {
    singleMarket: MarketObj
}

const EventUnder = ({ singleMarket }: Props) => {
    return <EventUnderWrap>{singleMarket.event[1].price}</EventUnderWrap>
}

export default observer(EventUnder)
