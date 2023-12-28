import { observer } from 'mobx-react'
import storeBetslip from '../../../../store/storeBetslip'
import clsx from 'clsx'
import useAccordion from '../../../../hooks/useAccordion'

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
    //Calculating sum of prices from betslip
    const sum = storeBetslip.betslipSum
    const sumFormated = (Math.round(sum * 100) / 100).toFixed(2)
    //Calculating sum of prices from sport data for comparation
    const newSum = storeBetslip.sportSum

    //Click on btn to accept incoming changes
    const onClickAccept = async () => {
        //Updating betslip
        storeBetslip.setBetslipChanges()
        //Reset visability for prices to sync with betslip
        storeBetslip.setAcceptChanges(false)
    }

    return (
        <BetslipWrap className={clsx(opened && 'active')}>
            <AcumulatorWrap onClick={() => setOpened((curr: boolean) => !curr)}>
                <AcumulatorText>
                    Acumulator (
                    <AcumulatorSpan>
                        {storeBetslip.betslip.length}
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
                        <Betslips />
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
