import { observer } from 'mobx-react'

import { ScoreHalfWrap } from './style'
import { GameObj } from '../../../../types/interfaces'

interface Props {
    singleGame: GameObj
    column: number
    team: number
}

const ScoreHalf = ({ singleGame, column, team }: Props) => {
    let halfText
    if (team === 1) {
        //Check column variable for correct column. If it is 1, display correct data for first half
        //If column variable is 2, check if there is data for half 2. If there is, display it. If no, display 0 in secound column
        halfText =
            column === 1
                ? singleGame.stats.score_set1.team1_value
                : singleGame.stats.score_set2 !== undefined
                ? singleGame.stats.score_set2.team1_value
                : 0
    } else if (team === 2) {
        halfText =
            column === 1
                ? singleGame.stats.score_set1.team2_value
                : singleGame.stats.score_set2 !== undefined
                ? singleGame.stats.score_set2.team2_value
                : 0
    }

    return <ScoreHalfWrap>{halfText}</ScoreHalfWrap>
}

export default observer(ScoreHalf)
