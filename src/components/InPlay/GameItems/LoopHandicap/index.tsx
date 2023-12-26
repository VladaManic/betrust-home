import { observer } from 'mobx-react'
import storeBetslip from '../../../../store/storeBetslip'

import EventBtn1 from '../EventBtn1'
import EventBtnBase from '../EventBtnBase'
import EventBtn2 from '../EventBtn2'

import emptyIcon from '../../../../assets/img/empty.svg'
import { EventBtnEmpty, EventEmptyIcon } from './style'
import { GameObj, MarketObj, EventObj } from '../../../../types/interfaces'

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
        //Getting rest of event ids of that market to remove it from betslip if they are already added
        const subidsArray: (string | number | undefined)[] = []
        if (e.currentTarget.dataset.base !== undefined) {
            let baseBase
            //Getting all of event ids from that market
            handicap[0].event.forEach(
                (singleEvent: EventObj, index: number) => {
                    if (index === 0) {
                        baseBase = singleEvent.id
                    }
                    subidsArray.push(singleEvent.id)
                }
            )
            //If clicked btn is not base
            if (e.currentTarget.dataset.base === 'false') {
                //Removing current id from array of event ids
                const index =
                    e.currentTarget.dataset.subid !== undefined &&
                    subidsArray.indexOf(parseInt(e.currentTarget.dataset.subid))
                index !== false && subidsArray.splice(index, 1)
                //Make specific id by adding '1' at the end of first event
                subidsArray.push(parseInt(baseBase!.toString() + '1'))
            }
        }
        const newOdd = {
            id: e.currentTarget.dataset.id,
            subid: e.currentTarget.dataset.subid,
            type: e.currentTarget.dataset.type,
            val: e.currentTarget.dataset.val,
            teams: e.currentTarget.dataset.teams,
            price: e.currentTarget.dataset.price,
            game: e.currentTarget.dataset.game,
        }
        storeBetslip.setBetslip(
            newOdd,
            e.currentTarget.dataset.subid,
            subidsArray
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
