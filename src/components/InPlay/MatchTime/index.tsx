import { observer } from 'mobx-react'

import { MatchTimeWrap } from './style'
import { GameObj } from '../../../types/interfaces'

interface Props {
    singleGame: GameObj
}

const MatchTime = ({ singleGame }: Props) => {
    return <MatchTimeWrap>{singleGame.info.current_game_time}'</MatchTimeWrap>
}

export default observer(MatchTime)
