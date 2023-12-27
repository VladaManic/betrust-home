import { useState } from 'react'
import { observer } from 'mobx-react'
import storeBetslip from '../../../../store/storeBetslip'
import clsx from 'clsx'
import useAccordion from '../../../../hooks/useAccordion'
import getBetslipSum from '../../../../utils/getBetslipSum'

import RemoveAll from '../RemoveAll'
import Betslips from '../Betslips'
import BetslipFooterChangeable from '../BetslipFooterChangeable'

import arrowIcon from '../../../../assets/img/arrow.svg'
import {
    BetslipWrap,
    AcumulatorWrap,
    AcumulatorText,
    AcumulatorSpan,
    AcumulatorTotal,
    AcumulatorArrow,
    OddsWrap,
    BetslipFooter,
    FooterInner,
    TotalWrap,
    TotalValue,
    PayoutWrap,
    TotalText,
} from './style'

const BetslipModal = () => {
    //Using custom hook for opening/closing acumulator modal
    const { opened, setOpened } = useAccordion(true)
    const [acceptVal, setAcceptVal] = useState<boolean>(false)
    //Calculating sum of prices from betslip
    const sum = storeBetslip.betslip.reduce(getBetslipSum, 0)
    const sumFormated = (Math.round(sum * 100) / 100).toFixed(2)
    //Calculating sum of prices from sport data for comparation
    const newSum = storeBetslip.currentSum

    //Click on btn to accept incoming changes
    const onClickAccept = async () => {
        //Sending props to child component to update prices
        setAcceptVal(true)
        //Updating betslip
        await storeBetslip.setBetslipChanges()
        //Reset state for sending props to child component to update prices
        setAcceptVal(false)
    }

    return (
        <BetslipWrap className={clsx(opened && 'active')}>
            <AcumulatorWrap onClick={() => setOpened((curr: boolean) => !curr)}>
                <AcumulatorText>
                    Acumulator (
                    <AcumulatorSpan>
                        {storeBetslip.betslipLength}
                    </AcumulatorSpan>
                    ) (<AcumulatorTotal>{sumFormated}</AcumulatorTotal>)
                </AcumulatorText>
                <AcumulatorArrow
                    src={arrowIcon}
                    alt="Arrow icon"
                    className="acumulator-arrow"
                />
            </AcumulatorWrap>
            {opened && (
                <>
                    <OddsWrap>
                        <RemoveAll />
                        <Betslips acceptVal={acceptVal} />
                    </OddsWrap>
                    <BetslipFooter>
                        <FooterInner>
                            <TotalWrap>
                                <TotalText>Total odds</TotalText>
                                <TotalValue
                                    className={clsx(
                                        'total-text',
                                        storeBetslip.acceptChanges &&
                                            sum !== newSum &&
                                            'change'
                                    )}
                                >
                                    {sumFormated}
                                </TotalValue>
                            </TotalWrap>
                            <PayoutWrap>
                                <TotalText>Payout (BTR)</TotalText>
                                <TotalValue className="payout-val">
                                    {parseFloat(sumFormated) * 0.52}
                                </TotalValue>
                            </PayoutWrap>
                        </FooterInner>
                        <BetslipFooterChangeable onClick={onClickAccept} />
                    </BetslipFooter>
                </>
            )}
        </BetslipWrap>
    )
}

export default observer(BetslipModal)
