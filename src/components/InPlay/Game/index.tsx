import { observer } from 'mobx-react'
import { orderBy } from 'lodash'

import MatchTime from '../GameItems/MatchTime'
import ScoreHalf from '../GameItems/ScoreHalf'
import EventBtnWinner from '../GameItems/EventBtnWinner'
import EventBtn1 from '../GameItems/EventBtn1'
import EventBtnBase from '../GameItems/EventBtnBase'
import EventBtn2 from '../GameItems/EventBtn2'

import emptyIcon from '../../../assets/img/empty.svg'
import {
    GameWrap,
    TeamsWrap,
    TeamName,
    HalfTimeScore,
    ScoreWrap,
    HalfTitle,
    AllEvents,
    EventBtnEmpty,
    EventEmptyIcon,
    EventsCount,
    EventsCountValue,
} from './style'
import { GameObj, MarketObj, EventObj } from '../../../types/interfaces'

interface Props {
    singleGame: GameObj
}

const Game = ({ singleGame }: Props) => {
    //Geting Winner event data for current game
    const winner = singleGame.market.filter(
        (singleMarket: MarketObj) => singleMarket.market_type === 'MatchResult'
    )
    //Geting Handicap event data for current game
    const handicap = singleGame.market.filter(
        (singleMarket: MarketObj) =>
            singleMarket.market_type === 'AsianHandicap' &&
            singleMarket.optimal == true
    )
    //Geting array of Over/Under events data for current game
    const overUnderArray = singleGame.market.filter(
        (singleMarket: MarketObj) => singleMarket.market_type === 'OverUnder'
    )
    //Sorting all 'OverUnder' markets by order
    const overUnder = orderBy(overUnderArray, ['order'])

    return (
        <GameWrap>
            <TeamsWrap>
                <TeamName>{singleGame.team1_name}</TeamName>
                <TeamName>{singleGame.team2_name}</TeamName>
                <MatchTime singleGame={singleGame} />
            </TeamsWrap>
            <AllEvents>
                <HalfTimeScore>
                    <ScoreWrap>
                        <ScoreHalf
                            singleGame={singleGame}
                            column={1}
                            team={1}
                        />
                        <ScoreHalf
                            singleGame={singleGame}
                            column={2}
                            team={1}
                        />
                    </ScoreWrap>
                    <ScoreWrap>
                        <ScoreHalf
                            singleGame={singleGame}
                            column={1}
                            team={2}
                        />
                        <ScoreHalf
                            singleGame={singleGame}
                            column={2}
                            team={2}
                        />
                    </ScoreWrap>
                    <ScoreWrap>
                        <HalfTitle>HT</HalfTitle>
                        <HalfTitle>HT</HalfTitle>
                    </ScoreWrap>
                </HalfTimeScore>
                {winner[0] !== undefined
                    ? winner[0].event.map((singleEvent: EventObj) => (
                          <EventBtnWinner
                              key={singleEvent.id}
                              singleEvent={singleEvent}
                          />
                      ))
                    : [...Array(3)].map((x, index) => (
                          <EventBtnEmpty className="event-btn" key={index}>
                              <EventEmptyIcon src={emptyIcon} alt="Lock icon" />
                          </EventBtnEmpty>
                      ))}
                {handicap[0] !== undefined ? (
                    <>
                        <EventBtn1 singleMarket={handicap[0]} />
                        <EventBtnBase singleMarket={handicap[0]} />
                        <EventBtn2 singleMarket={handicap[0]} />
                    </>
                ) : (
                    [...Array(3)].map((x, index) => (
                        <EventBtnEmpty className="event-btn" key={index}>
                            <EventEmptyIcon src={emptyIcon} alt="Lock icon" />
                        </EventBtnEmpty>
                    ))
                )}
                {
                    <>
                        <EventBtn1 singleMarket={overUnder[0]} />
                        <EventBtnBase singleMarket={overUnder[0]} />
                        <EventBtn2 singleMarket={overUnder[0]} />
                    </>
                }
                <EventsCount>
                    <EventsCountValue>
                        +{singleGame.market.length}
                    </EventsCountValue>
                </EventsCount>
            </AllEvents>
        </GameWrap>
    )
}

export default observer(Game)
