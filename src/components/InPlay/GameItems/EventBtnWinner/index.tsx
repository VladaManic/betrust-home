import { observer } from 'mobx-react'

import { EventBtnWrap } from './style'
import { MarketObj, EventObj } from '../../../../types/interfaces'

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

    return (
        <EventBtnWrap
            className="event-btn"
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
