import { observer } from 'mobx-react'

import { ScoreHalfWrap } from './style'
import { GameObj } from '../../../../types/interfaces'

interface Props {
    singleGame: GameObj
    column: number
}

const ScoreHalf = ({ singleGame, column }: Props) => {
    //Check column variable for correct column. If it is 1, display correct data for first half
    //If column variable is 2, check if there is data for half 2. If there is, display it. If no, display 0 in secound column
    const halfText =
        column === 1
            ? singleGame.stats.score_set1.team1_value
            : singleGame.stats.score_set2 !== undefined
            ? singleGame.stats.score_set2.team1_value
            : 0

    return <ScoreHalfWrap>{halfText}</ScoreHalfWrap>
}

export default observer(ScoreHalf)
