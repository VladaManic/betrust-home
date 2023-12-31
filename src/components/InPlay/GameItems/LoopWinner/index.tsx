import { observer } from 'mobx-react'
import storeBetslip from '../../../../store/storeBetslip'
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
        //Getting rest of event ids of that market to remove it from betslip if they are already added
        const idsArray: (string | number | undefined)[] = []
        winnerEventsSorted.forEach((singleEvent: EventObj) =>
            idsArray.push(singleEvent.id)
        )
        const index =
            e.currentTarget.dataset.eventid !== undefined &&
            idsArray.indexOf(parseInt(e.currentTarget.dataset.eventid))
        index !== false && idsArray.splice(index, 1)
        // Makin object with data for new odd
        const newOdd = {
            marketId: e.currentTarget.dataset.marketid,
            eventId: e.currentTarget.dataset.eventid,
            type: e.currentTarget.dataset.type,
            val: e.currentTarget.dataset.val,
            teams: e.currentTarget.dataset.teams,
            price: e.currentTarget.dataset.price,
            game: e.currentTarget.dataset.game,
        }
        storeBetslip.setBetslip(
            newOdd,
            e.currentTarget.dataset.eventid,
            idsArray
        )
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
