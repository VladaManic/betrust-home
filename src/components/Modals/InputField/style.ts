import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const InputWrap = styled.input`
    width: 88%;
    height: 30px;
    padding-left: 10px;
    margin-bottom: 25px;
    border: none;
    border: 2px solid ${color.inputBlue};
    border-radius: 5px;
    background-color: ${color.defaultBg};
    color: ${color.defaultText};
`
