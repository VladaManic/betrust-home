import styled from 'styled-components'
import { color } from '../../../../shared/styles/variables'

export const SingleOddWrap = styled.div`
    padding-top: 15px;
    border-top: 1px solid ${color.linksBlue};
`

export const SingleOddInner = styled.div`
    display: flex;
`

export const RemoveIconWrap = styled.div`
    width: 25px;
    text-align: center;
`

export const RemoveIcon = styled.img`
    cursor: pointer;
`

export const OddData = styled.div`
    flex: 1;
`

export const OddHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

export const OddValue = styled.p`
    font-size: 16px;
    line-height: 25px;

    &.removed {
        color: ${color.btnGray};
    }
`

export const OddPrice = styled.p`
    margin-right: 5px;
    font-size: 16px;
    line-height: 25px;

    &.change {
        padding-right: 10px;
        padding-left: 10px;
        border-radius: 6px;
        background-color: ${color.activeBlue};
        color: ${color.btnBlue};
    }

    &.removed {
        color: ${color.btnGray};
    }
`

export const OddType = styled.p`
    font-size: 12px;
    line-height: 17px;
    color: ${color.typeBlue};

    &.removed {
        color: ${color.btnGray};
    }
`

export const OddTeams = styled.p`
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 17px;
    color: ${color.balanceGray};

    &.removed {
        color: ${color.btnGray};
    }
`
