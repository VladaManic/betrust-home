import { observer } from 'mobx-react'
import storeBetslip from '../../../../store/storeBetslip'
import { orderBy } from 'lodash'

import EventBtn1 from '../EventBtn1'
import EventBtnBase from '../EventBtnBase'
import EventBtn2 from '../EventBtn2'

import { GameObj, MarketObj, EventObj } from '../../../../types/interfaces'

interface Props {
    singleGame: GameObj
}

const LoopOverUnder = ({ singleGame }: Props) => {
    //Geting array of Over/Under events data for current game
    const overUnderArray = singleGame.market.filter(
        (singleMarket: MarketObj) => singleMarket.market_type === 'OverUnder'
    )
    //Sorting all 'OverUnder' markets by order
    const overUnder = orderBy(overUnderArray, ['order'])

    const onClickHandler = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.TouchEvent<HTMLButtonElement>
    ) => {
        //Getting rest of event ids of that market to remove it from betslip if they are already added
        const idsArray: (string | number | undefined)[] = []
        if (e.currentTarget.dataset.base !== undefined) {
            let baseBase
            //Getting all of event ids from that market
            overUnder[0].event.forEach(
                (singleEvent: EventObj, index: number) => {
                    if (index === 0) {
                        baseBase = singleEvent.id
                    }
                    idsArray.push(singleEvent.id)
                }
            )
            //If clicked btn is not base
            if (e.currentTarget.dataset.base === 'false') {
                //Removing current id from array of event ids
                const index =
                    e.currentTarget.dataset.eventid !== undefined &&
                    idsArray.indexOf(parseInt(e.currentTarget.dataset.eventid))
                index !== false && idsArray.splice(index, 1)
                //Make specific id by adding '1' at the end of first event
                idsArray.push(parseInt(baseBase!.toString() + '1'))
            }
        }
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
            {
                <>
                    <EventBtn1
                        singleMarket={overUnder[0]}
                        type="Over / Under"
                        team1={singleGame.team1_name}
                        team2={singleGame.team2_name}
                        gameId={singleGame.id}
                        onClick={onClickHandler}
                    />
                    <EventBtnBase
                        singleMarket={overUnder[0]}
                        type="Over / Under"
                        team1={singleGame.team1_name}
                        team2={singleGame.team2_name}
                        gameId={singleGame.id}
                        onClick={onClickHandler}
                    />
                    <EventBtn2
                        singleMarket={overUnder[0]}
                        type="Over / Under"
                        team1={singleGame.team1_name}
                        team2={singleGame.team2_name}
                        gameId={singleGame.id}
                        onClick={onClickHandler}
                    />
                </>
            }
        </>
    )
}

export default observer(LoopOverUnder)
