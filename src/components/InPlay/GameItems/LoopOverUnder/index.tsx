import { observer } from 'mobx-react'
import store from '../../../../store/store'
import { orderBy } from 'lodash'

import EventBtn1 from '../EventBtn1'
import EventBtnBase from '../EventBtnBase'
import EventBtn2 from '../EventBtn2'

import { GameObj, MarketObj } from '../../../../types/interfaces'

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
