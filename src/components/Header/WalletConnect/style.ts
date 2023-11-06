import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const WalletWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 39px;
    margin-right: 15px;
    border: 2px solid ${color.borderBlue};
    border-radius: 8px;
    font-family: 'Open Sans SemiBold', sans-serif;
`

export const WalletString = styled.p`
    font-family: 'Open Sans SemiBold', sans-serif;
    font-size: 14px;
    line-height: 19px;
`

export const ConnectImg = styled.img`
    margin-right: 10px;
    margin-bottom: -3px;
`
