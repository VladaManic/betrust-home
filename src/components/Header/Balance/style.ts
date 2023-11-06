import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const BalanceWrap = styled.div`
    display: flex;
    margin-right: 25px;
    font-size: 14px;
    line-height: 19px;
`

export const BalanceText = styled.p`
    margin-right: 10px;
    font-family: 'Open Sans Regular', sans-serif;
    font-size: inherit;
    color: ${color.balanceGray};
`

export const BalanceValue = styled.p`
    margin-right: 5px;
    font-family: 'Open Sans SemiBold', sans-serif;
    font-size: inherit;
    color: ${color.defaultText};
`

export const BalanceImg = styled.img``
