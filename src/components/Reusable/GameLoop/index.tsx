import { observer } from 'mobx-react'

import Game from '../../InPlay/Game'

import { CompetitionObj, GameObj } from '../../../types/interfaces'

interface Props {
    singleCompetition: CompetitionObj
}

const GameLoop = ({ singleCompetition }: Props) => {
    return (
        <>
            {singleCompetition.game.map((singleGame: GameObj) => (
                <Game key={singleGame.id} singleGame={singleGame} />
            ))}
        </>
    )
}

export default observer(GameLoop)
