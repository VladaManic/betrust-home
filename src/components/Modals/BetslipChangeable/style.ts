import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const BetslipChangeableWrap = styled.div``

export const InputWrap = styled.div`
    position: relative;
`

export const StakeInput = styled.input`
    width: 99%;
    height: 41px;
    padding-left: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 10px;
    background-color: ${color.defaultBg};
    font-family: 'Open Sans SemiBold', sans-serif;
    font-size: 14px;
    line-height: 19px;
`

export const InputInner = styled.div`
    position: absolute;
    right: 7px;
    top: 10px;
    display: flex;
    align-items: center;
`

export const InputText = styled.p`
    margin-right: 5px;
    font-family: 'Open Sans SemiBold', sans-serif;
    font-size: 14px;
    line-height: 19px;
`

export const InputImg = styled.img`
    width: 18px;
    height: 18px;
`

export const FooterBtns = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ApproveBtn = styled.button`
    width: 48%;
    height: 39px;
    font-family: 'Open Sans SemiBold', sans-serif;
    font-size: 14px;
    line-height: 19px;
    border: 2px solid ${color.borderBlue};
    border-radius: 8px;
    color: ${color.defaultText};
`

export const PlaceBtn = styled.button`
    width: 48%;
    height: 39px;
    font-family: 'Open Sans SemiBold', sans-serif;
    font-size: 14px;
    line-height: 19px;
    border-radius: 8px;
    background-color: ${color.btnBlue};
    color: ${color.btnGray};
`
