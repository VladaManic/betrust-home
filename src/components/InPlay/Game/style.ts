import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const GameWrap = styled.div`
    display: flex;
    justify-content: space-between;
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

export const AllMarkets = styled.div``

export const HalfTimeScore = styled.div``

export const AllEvents = styled.div``

export const EventBtn = styled.button`
    height: 45px;
    width: 80px;
    border: 1px solid ${color.eventBlue};
    border-radius: 8px;
    color: ${color.defaultText};
`
