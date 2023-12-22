import styled from 'styled-components'
import { color } from '../../../../shared/styles/variables'

export const BetslipWrap = styled.div`
    width: 380px;
    padding: 10px;
    background-color: ${color.headerBg};
    border-radius: 10px;

    &.active {
        .acumulator-arrow {
            transform: rotate(180deg);
        }
    }
`

export const AcumulatorWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    cursor: pointer;
`

export const AcumulatorText = styled.p`
    font-size: 16px;
    line-height: 25px;
`

export const AcumulatorSpan = styled.span``

export const AcumulatorTotal = styled.span``

export const AcumulatorArrow = styled.img``

export const OddsWrap = styled.div`
    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px ${color.defaultBg};
        border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${color.scrollBlue};
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${color.btnBlue};
    }
`

export const RemoveAll = styled.button`
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Axiforma', sans-serif;
    font-size: 14px;
    line-height: 22px;
    color: ${color.removeBlue};
`

export const BetslipInner = styled.div`
    max-height: 425px;
    overflow: auto;
`

export const BetslipFooter = styled.div`
    padding-top: 15px;
    border-top: 1px solid ${color.linksBlue};
`

export const FooterInner = styled.div`
    display: flex;
    padding-bottom: 15px;
`

export const TotalWrap = styled.div`
    width: 50%;
    border-right: 1px solid ${color.linksBlue};
    text-align: center;
`

export const TotalText = styled.p`
    margin-bottom: 5px;
    font-size: 11px;
    line-height: 17px;
`

export const TotalValue = styled.p`
    padding-right: 10px;
    padding-left: 10px;
    border-radius: 6px;
    font-size: 16px;
    line-height: 25px;

    &.total-text {
        width: 35px;
        margin-right: auto;
        margin-left: auto;
    }

    &.change {
        background-color: ${color.activeBlue};
        color: ${color.btnBlue};
    }

    &.payout-val {
        color: ${color.payoutGreen};
    }
`

export const PayoutWrap = styled.div`
    width: 50%;
    text-align: center;
`

export const AcceptText = styled.p`
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
`
