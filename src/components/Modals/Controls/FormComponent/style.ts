import styled from 'styled-components'
import { color } from '../../../../shared/styles/variables'

export const FormWrap = styled.form``

export const InputWrap = styled.input`
    width: 45%;
    height: 30px;
    padding-left: 10px;
    margin-bottom: 25px;
    border: none;
    border: 2px solid ${color.inputBlue};
    border-radius: 5px;
    background-color: ${color.defaultBg};
    color: ${color.defaultText};
`

export const SubmitWrap = styled.button`
    width: 35%;
    height: 35px;
    margin-left: 5px;
    border: 2px solid ${color.borderBlue};
    border-radius: 5px;
    font-family: 'Open Sans Regular', sans-serif;
    color: ${color.defaultText};
`
