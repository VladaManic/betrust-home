import { observer } from 'mobx-react'
import { orderBy } from 'lodash'

import EventUnder from '../GameItems/EventUnder'
import ScoreHalf from '../GameItems/ScoreHalf'
import MatchTime from '../GameItems/MatchTime'

import {
    GameWrap,
    TeamsWrap,
    TeamName,
    HalfTimeScore,
    ScoreWrap,
    ScoreHalfWrap,
    HalfTitle,
    AllEvents,
    EventBtn,
    EventBtnEmpty,
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
                        <ScoreHalf singleGame={singleGame} column={1} />
                        <ScoreHalf singleGame={singleGame} column={2} />
                    </ScoreWrap>
                    <ScoreWrap>
                        <ScoreHalfWrap>
                            {singleGame.stats.score_set1.team2_value}
                        </ScoreHalfWrap>
                        <ScoreHalfWrap>
                            {singleGame.stats.score_set2 !== undefined
                                ? singleGame.stats.score_set2.team2_value
                                : 0}
                        </ScoreHalfWrap>
                    </ScoreWrap>
                    <ScoreWrap>
                        <HalfTitle>HT</HalfTitle>
                        <HalfTitle>HT</HalfTitle>
                    </ScoreWrap>
                </HalfTimeScore>
                {winner[0] !== undefined
                    ? winner[0].event.map((singleEvent: EventObj) => (
                          <EventBtn className="event-btn" key={singleEvent.id}>
                              {singleEvent.price}
                          </EventBtn>
                      ))
                    : [...Array(3)].map((x, index) => (
                          <EventBtnEmpty className="event-btn" key={index}>
                              ?
                          </EventBtnEmpty>
                      ))}
                {handicap[0] !== undefined ? (
                    <>
                        <EventBtn className="event-btn">
                            {handicap[0].event[0].price}
                        </EventBtn>
                        <EventBtnEmpty className="event-btn">
                            {handicap[0].base}
                        </EventBtnEmpty>
                        <EventBtn className="event-btn">
                            {handicap[0].event[1].price}
                        </EventBtn>
                    </>
                ) : (
                    [...Array(3)].map((x, index) => (
                        <EventBtnEmpty className="event-btn" key={index}>
                            ?
                        </EventBtnEmpty>
                    ))
                )}
                {
                    <>
                        <EventBtn className="event-btn">
                            {overUnder[0].event[0].price}
                        </EventBtn>
                        <EventBtnEmpty className="event-btn">
                            {overUnder[0].base}
                        </EventBtnEmpty>
                        <EventUnder singleMarket={overUnder[0]} />
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
