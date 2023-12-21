import { observer } from 'mobx-react'
import store from '../../../../store/store'
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

const EventBtnBase = ({
    singleMarket,
    type,
    team1,
    team2,
    gameId,
    onClick,
}: Props) => {
    const val = type === 'Handicap' ? 'Tied' : 'O/U'
    const teams = team1 + ' vs ' + team2
    const baseVal = parseInt(singleMarket.event[0].id.toString() + '1')
    //Check if button is already clicked and if so, disable it
    const disabledState = store.betslip.filter(
        (singleOdd: BetSlipDataObj) => singleOdd.subid === baseVal.toString()
    )

    return (
        <EventBtnWrap
            className={clsx(
                'event-btn',
                disabledState.length !== 0 && 'disabled'
            )}
            data-id={singleMarket.id}
            data-subid={baseVal}
            data-type={type}
            data-val={val}
            data-teams={teams}
            data-price={singleMarket.base}
            data-game={gameId}
            onClick={onClick}
        >
            {singleMarket.base}
        </EventBtnWrap>
    )
}

export default observer(EventBtnBase)
