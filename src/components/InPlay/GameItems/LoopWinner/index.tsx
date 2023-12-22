import { observer } from 'mobx-react'
import store from '../../../../store/store'
import { orderBy } from 'lodash'

import EventBtnWinner from '../../GameItems/EventBtnWinner'

import emptyIcon from '../../../../assets/img/empty.svg'
import { EventBtnEmpty, EventEmptyIcon } from './style'
import { GameObj, MarketObj, EventObj } from '../../../../types/interfaces'

interface Props {
    singleGame: GameObj
}

const LoopWinner = ({ singleGame }: Props) => {
    //Geting Winner event data for current game
    const winner = singleGame.market.filter(
        (singleMarket: MarketObj) => singleMarket.market_type === 'MatchResult'
    )
    //Sorting Winner events by order
    const winnerEventsSorted =
        winner[0] !== undefined ? orderBy(winner[0].event, ['order']) : []

    const onClickHandler = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.TouchEvent<HTMLButtonElement>
    ) => {
        const newOdd = {
            id: e.currentTarget.dataset.id,
            subid: e.currentTarget.dataset.subid,
            type: e.currentTarget.dataset.type,
            val: e.currentTarget.dataset.val,
            teams: e.currentTarget.dataset.teams,
            price: e.currentTarget.dataset.price,
            game: e.currentTarget.dataset.game,
        }
        store.setBetslip(newOdd)
    }

    return (
        <>
            {winner[0] !== undefined
                ? winnerEventsSorted.map((singleEvent: EventObj) => (
                      <EventBtnWinner
                          key={singleEvent.id}
                          singleMarket={winner[0]}
                          singleEvent={singleEvent}
                          type="Winner"
                          val={singleEvent.name}
                          team1={singleGame.team1_name}
                          team2={singleGame.team2_name}
                          gameId={singleGame.id}
                          onClick={onClickHandler}
                      />
                  ))
                : [...Array(3)].map((x, index) => (
                      <EventBtnEmpty className="event-btn" key={index}>
                          <EventEmptyIcon src={emptyIcon} alt="Lock icon" />
                      </EventBtnEmpty>
                  ))}
        </>
    )
}

export default observer(LoopWinner)