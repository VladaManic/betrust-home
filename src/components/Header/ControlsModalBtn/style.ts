import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const BtnWrap = styled.button`
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 39px;
    margin-right: 15px;
    border: 2px solid ${color.borderBlue};
    border-radius: 8px;
    font-family: 'Open Sans Bold', sans-serif;
    color: ${color.defaultText};
`
