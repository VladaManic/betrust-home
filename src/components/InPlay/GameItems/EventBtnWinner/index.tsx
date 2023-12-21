import { observer } from 'mobx-react'
import store from '../../../../store/store'
import clsx from 'clsx'

import { EventBtnWrap } from './style'
import {
    MarketObj,
    EventObj,
    BetSlipDataObj,
} from '../../../../types/interfaces'

interface Props {
    singleMarket: MarketObj
    singleEvent: EventObj
    type: string
    val: string
    team1: string
    team2: string
    gameId: number | undefined
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const EventBtnWinner = ({
    singleMarket,
    singleEvent,
    type,
    val,
    team1,
    team2,
    gameId,
    onClick,
}: Props) => {
    const teams = team1 + ' vs ' + team2
    //Check if button is already clicked and if so, disable it
    const disabledState = store.betslip.filter(
        (singleOdd: BetSlipDataObj) =>
            singleOdd.subid === singleEvent.id.toString()
    )

    return (
        <EventBtnWrap
            className={clsx(
                'event-btn',
                disabledState.length !== 0 && 'disabled'
            )}
            data-id={singleMarket.id}
            data-subid={singleEvent.id}
            data-type={type}
            data-val={val}
            data-teams={teams}
            data-price={singleEvent.price}
            data-game={gameId}
            onClick={onClick}
        >
            {singleEvent.price}
        </EventBtnWrap>
    )
}

export default observer(EventBtnWinner)
