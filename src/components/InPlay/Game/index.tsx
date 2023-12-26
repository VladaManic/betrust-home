import { observer } from 'mobx-react'

import MatchTime from '../GameItems/MatchTime'
import ScoreHalf from '../GameItems/ScoreHalf'
import LoopWinner from '../GameItems/LoopWinner'
import LoopHandicap from '../GameItems/LoopHandicap'
import LoopOverUnder from '../GameItems/LoopOverUnder'

import {
    GameWrap,
    TeamsWrap,
    TeamName,
    HalfTimeScore,
    ScoreWrap,
    HalfTitle,
    AllEvents,
    EventsCount,
    EventsCountValue,
} from './style'
import { GameObj } from '../../../types/interfaces'

interface Props {
    singleGame: GameObj
}

const Game = ({ singleGame }: Props) => {
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
                <LoopWinner singleGame={singleGame} />
                <LoopHandicap singleGame={singleGame} />
                <LoopOverUnder singleGame={singleGame} />
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
