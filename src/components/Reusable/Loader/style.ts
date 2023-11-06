import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const LoaderWrap = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 50px;
`

export const LoaderInner = styled.div`
    width: 50px !important;
    height: 50px !important;
    border: 8px solid ${color.defaultBg};
    border-radius: 50%;
    border-top: 8px solid ${color.defaultText};
    border-right: 8px solid ${color.defaultText};
    background: none !important;
    animation: spin 2s linear infinite;

    /* Safari */
    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`
