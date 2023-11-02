import { GameWrap, TeamsWrap, TeamName, MatchTime } from './style'
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
                <MatchTime>{singleGame.info.current_game_time}</MatchTime>
            </TeamsWrap>
        </GameWrap>
    )
}

export default Game
