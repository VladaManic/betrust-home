import { orderBy } from 'lodash'

import {
    GameWrap,
    TeamsWrap,
    TeamName,
    MatchTime,
    AllMarkets,
    HalfTimeScore,
    AllEvents,
    EventBtn,
} from './style'
import { GameObj, MarketObj, EventObj } from '../../../types/interfaces'

interface Props {
    singleGame: GameObj
}

const Game = ({ singleGame }: Props) => {
    const winner = singleGame.market.filter(
        (singleMarket: MarketObj) => singleMarket.market_type === 'MatchResult'
    )
    const handicap = singleGame.market.filter(
        (singleMarket: MarketObj) =>
            singleMarket.market_type === 'AsianHandicap' &&
            singleMarket.optimal == true
    )
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
                <MatchTime>{singleGame.info.current_game_time}</MatchTime>
            </TeamsWrap>
            <AllMarkets>
                <HalfTimeScore></HalfTimeScore>
                <AllEvents>
                    {winner[0] !== undefined
                        ? winner[0].event.map((singleEvent: EventObj) => (
                              <EventBtn key={singleEvent.id}>
                                  {singleEvent.price}
                              </EventBtn>
                          ))
                        : [...Array(3)].map((x, index) => (
                              <EventBtn key={index}>?</EventBtn>
                          ))}
                    {handicap[0] !== undefined
                        ? handicap[0].event.map((singleEvent: EventObj) => (
                              <EventBtn key={singleEvent.id}>
                                  {singleEvent.price}
                              </EventBtn>
                          ))
                        : [...Array(2)].map((x, index) => (
                              <EventBtn key={index}>?</EventBtn>
                          ))}
                    {overUnder[0].event.map((singleEvent: EventObj) => (
                        <EventBtn key={singleEvent.id}>
                            {singleEvent.price}
                        </EventBtn>
                    ))}
                </AllEvents>
            </AllMarkets>
        </GameWrap>
    )
}

export default Game
