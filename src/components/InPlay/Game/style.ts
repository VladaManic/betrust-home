import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const GameWrap = styled.div`
    border-bottom: 1px solid ${color.headerBg};
`

export const TeamsWrap = styled.div`
    margin-left: 5px;
`

export const TeamName = styled.p`
    line-height: 17px;
`

export const MatchTime = styled.p`
    color: ${color.timeYellow};
`
