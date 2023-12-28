import { observer } from 'mobx-react'
import storeBetslip from '../../../../store/storeBetslip'

import EventBtn1 from '../EventBtn1'
import EventBtnBase from '../EventBtnBase'
import EventBtn2 from '../EventBtn2'

import emptyIcon from '../../../../assets/img/empty.svg'
import { EventBtnEmpty, EventEmptyIcon } from './style'
import { GameObj, MarketObj } from '../../../../types/interfaces'

interface Props {
    singleGame: GameObj
}

const LoopHandicap = ({ singleGame }: Props) => {
    //Geting Handicap event data for current game
    const handicap = singleGame.market.filter(
        (singleMarket: MarketObj) =>
            singleMarket.market_type === 'AsianHandicap' &&
            singleMarket.optimal == true
    )

    const onClickHandler = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.TouchEvent<HTMLButtonElement>
    ) => {
        const newOdd = {
            marketId: e.currentTarget.dataset.marketid,
            eventId: e.currentTarget.dataset.eventid,
            type: e.currentTarget.dataset.type,
            val: e.currentTarget.dataset.val,
            teams: e.currentTarget.dataset.teams,
            price: e.currentTarget.dataset.price,
            game: e.currentTarget.dataset.game,
            newPrice: null,
        }
        storeBetslip.setBetslip(
            newOdd,
            e.currentTarget.dataset.eventid,
            handicap[0].event,
            e.currentTarget.dataset.base
        )
    }

    return (
        <>
            {handicap[0] !== undefined ? (
                <>
                    <EventBtn1
                        singleMarket={handicap[0]}
                        type="Handicap"
                        team1={singleGame.team1_name}
                        team2={singleGame.team2_name}
                        gameId={singleGame.id}
                        onClick={onClickHandler}
                    />
                    <EventBtnBase
                        singleMarket={handicap[0]}
                        type="Handicap"
                        team1={singleGame.team1_name}
                        team2={singleGame.team2_name}
                        gameId={singleGame.id}
                        onClick={onClickHandler}
                    />
                    <EventBtn2
                        singleMarket={handicap[0]}
                        type="Handicap"
                        team1={singleGame.team1_name}
                        team2={singleGame.team2_name}
                        gameId={singleGame.id}
                        onClick={onClickHandler}
                    />
                </>
            ) : (
                [...Array(3)].map((x, index) => (
                    <EventBtnEmpty className="event-btn" key={index}>
                        <EventEmptyIcon src={emptyIcon} alt="Lock icon" />
                    </EventBtnEmpty>
                ))
            )}
        </>
    )
}

export default observer(LoopHandicap)
