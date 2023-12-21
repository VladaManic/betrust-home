import { observer } from 'mobx-react'
import store from '../../../../store/store'
import { orderBy } from 'lodash'
import clsx from 'clsx'

import { EventBtnWrap } from './style'
import { MarketObj } from '../../../../types/interfaces'

interface Props {
    singleMarket: MarketObj
    type: string
    team1: string
    team2: string
    gameId: number | undefined
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const EventBtn2 = ({
    singleMarket,
    type,
    team1,
    team2,
    gameId,
    onClick,
}: Props) => {
    //Sort events to be positively surtain
    const eventsSorted = orderBy(singleMarket.event, ['order'])
    const val = type === 'Handicap' ? '2' : 'Under'
    const teams = team1 + ' vs ' + team2
    //Check if button is already clicked and if so, disable it
    const disabledState = store.betslip.some(function (item) {
        return item.subid === eventsSorted[1].id.toString()
    })

    return (
        <EventBtnWrap
            className={clsx('event-btn', disabledState && 'disabled')}
            data-id={singleMarket.id}
            data-subid={eventsSorted[1].id}
            data-type={type}
            data-val={val}
            data-teams={teams}
            data-price={eventsSorted[1].price}
            data-game={gameId}
            onClick={onClick}
        >
            {eventsSorted[1].price}
        </EventBtnWrap>
    )
}

export default observer(EventBtn2)
