import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const GameWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 71px;
    border-bottom: 1px solid ${color.headerBg};

    &:last-of-type {
        border: none;
    }
`

export const TeamsWrap = styled.div`
    width: 15%;
    margin-left: 5px;
`

export const TeamName = styled.p`
    line-height: 17px;
`

export const MatchTime = styled.p`
    color: ${color.timeYellow};
`

export const AllEvents = styled.div`
    display: flex;
    align-items: center;
    flex: 1;

    .event-btn {
        margin-right: 5px;

        &:nth-of-type(3n) {
            margin-right: 20px;
        }

        &:last-of-type {
            margin-right: 5px;
        }
    }
`

export const HalfTimeScore = styled.div`
    display: inline-block;
    width: 40px;
    margin-right: 10px;
    line-height: 17px;
`

export const ScoreWrap = styled.p`
    display: inline-block;
    width: 100%;
    text-align: center;
`

export const ScoreHalf = styled.span`
    display: inline-block;
    width: 50%;
    text-align: center;
`

export const HalfTitle = styled.span`
    display: inline-block;
    width: 50%;
    text-align: center;
    color: ${color.halfGray};
`

export const EventBtn = styled.button`
    height: 45px;
    width: 10%;
    border: 1px solid ${color.eventBlue};
    border-radius: 8px;
    color: ${color.defaultText};
`

export const EventBtnEmpty = styled.button`
    height: 45px;
    width: 10%;
    color: ${color.defaultText};
`

export const EventsCount = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 45px;
    width: 30px;
`

export const EventsCountValue = styled.p`
    font-size: 12px;
    line-height: 17px;
    text-align: center;
    color: ${color.activeBlue};
`
