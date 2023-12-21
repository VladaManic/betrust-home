import { observer } from 'mobx-react'
import store from '../../../../store/store'
import { orderBy } from 'lodash'
import clsx from 'clsx'

import { EventBtnWrap } from './style'
import { MarketObj, BetSlipDataObj } from '../../../../types/interfaces'

interface Props {
    singleMarket: MarketObj
    type: string
    team1: string
    team2: string
    gameId: number | undefined
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const EventBtn1 = ({
    singleMarket,
    type,
    team1,
    team2,
    gameId,
    onClick,
}: Props) => {
    //Sort events to be positively surtain
    const eventsSorted = orderBy(singleMarket.event, ['order'])
    const val = type === 'Handicap' ? '1' : 'Over'
    const teams = team1 + ' vs ' + team2
    //Check if button is already clicked and if so, disable it
    const disabledState = store.betslip.filter(
        (singleOdd: BetSlipDataObj) =>
            singleOdd.subid === eventsSorted[0].id.toString()
    )

    return (
        <EventBtnWrap
            className={clsx(
                'event-btn',
                disabledState.length !== 0 && 'disabled'
            )}
            data-id={singleMarket.id}
            data-subid={eventsSorted[0].id}
            data-type={type}
            data-val={val}
            data-teams={teams}
            data-price={eventsSorted[0].price}
            data-game={gameId}
            onClick={onClick}
        >
            {eventsSorted[0].price}
        </EventBtnWrap>
    )
}

export default observer(EventBtn1)
