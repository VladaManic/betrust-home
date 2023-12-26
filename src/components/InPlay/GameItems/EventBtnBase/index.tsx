import { observer } from 'mobx-react'

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

    return (
        <EventBtnWrap
            className="event-btn"
            data-id={singleMarket.id}
            data-subid={baseVal}
            data-type={type}
            data-val={val}
            data-teams={teams}
            data-price={singleMarket.base}
            data-game={gameId}
            data-base={true}
            onClick={onClick}
        >
            {singleMarket.base}
        </EventBtnWrap>
    )
}

export default observer(EventBtnBase)
