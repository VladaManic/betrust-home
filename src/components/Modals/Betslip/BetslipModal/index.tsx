import { useState } from 'react'
import { observer } from 'mobx-react'
import store from '../../../../store/store'
import clsx from 'clsx'
import useAccordion from '../../../../hooks/useAccordion'

import Betslips from '../Betslips'
import AcceptChangesBtn from '../AcceptChangesBtn'
import BetslipChangeable from '../BetslipChangeable'

import arrowIcon from '../../../../assets/img/arrow.svg'
import {
    BetslipWrap,
    AcumulatorWrap,
    AcumulatorText,
    AcumulatorSpan,
    AcumulatorTotal,
    AcumulatorArrow,
    OddsWrap,
    RemoveAll,
    BetslipFooter,
    FooterInner,
    TotalWrap,
    TotalValue,
    PayoutWrap,
    TotalText,
    AcceptText,
} from './style'
import { BetSlipDataObj, EventObj } from '../../../../types/interfaces'

const BetslipModal = () => {
    //Using custom hook for opening/closing acumulator modal
    const { opened, setOpened } = useAccordion(true)
    const [acceptVal, setAcceptVal] = useState<boolean>(false)
    //Calculating sum of prices from betslip
    let sum: number = 0
    store.betslip.forEach(
        (singleBetslip: BetSlipDataObj) =>
            (sum = sum + parseFloat(singleBetslip.price!))
    )
    const sumFormated = (Math.round(sum * 100) / 100).toFixed(2)

    //Calculating sum of prices from sport data for comparation
    let newSum: number = 0
    let currentPrice: number = 0
    for (const singleBetslip of store.betslip) {
        for (const singleRegion of store.sport.region!) {
            for (const singleCompetition of singleRegion.competition) {
                for (const singleGame of singleCompetition.game) {
                    for (const singleMarket of singleGame.market) {
                        if (singleBetslip.id === singleMarket.id.toString()) {
                            //Trying to find event with correct id
                            const correctEvent = singleMarket.event.filter(
                                (singleEvent: EventObj) =>
                                    singleEvent.id.toString() ===
                                    singleBetslip.subid
                            )
                            //If event found, get it's price
                            if (correctEvent[0] !== undefined) {
                                currentPrice = correctEvent[0].price
                                //If there is no event with that id, it means that it's Tied clicked and than base value is used
                            } else {
                                currentPrice = singleMarket.base
                            }
                            newSum = newSum + currentPrice
                        }
                    }
                }
            }
        }
    }

    //Click on 'Remove all' to remove all played odds at once
    const removeAllHandler = () => {
        store.setBetslipDeleteAll()
    }

    //Click on btn to accept incoming changes
    const onClickAccept = async () => {
        //Sending props to child component to update prices
        setAcceptVal(true)
        //Updating betslip
        await store.setChangesBetslip()
        //Reset state for sending props to child component to update prices
        setAcceptVal(false)
    }

    //Click on btn to accept incoming deletes
    const onClickAcceptDelete = () => {
        //Updating betslip
        store.setBetslipDeletes()
    }

    return (
        <BetslipWrap className={clsx(opened && 'active')}>
            <AcumulatorWrap onClick={() => setOpened((curr: boolean) => !curr)}>
                <AcumulatorText>
                    Acumulator (
                    <AcumulatorSpan>{store.betslip.length}</AcumulatorSpan>) (
                    <AcumulatorTotal>{sumFormated}</AcumulatorTotal>)
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
                        <RemoveAll onClick={removeAllHandler}>
                            RemoveAll
                        </RemoveAll>
                        <Betslips acceptVal={acceptVal} />
                    </OddsWrap>
                    <BetslipFooter>
                        <FooterInner>
                            <TotalWrap>
                                <TotalText>Total odds</TotalText>
                                <TotalValue
                                    className={clsx(
                                        'total-text',
                                        store.acceptChanges &&
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
                        {store.acceptChanges && (
                            <>
                                <AcceptText>
                                    The line, odds, or availability of your
                                    selection has changed.
                                </AcceptText>
                                <AcceptChangesBtn onClick={onClickAccept} />
                            </>
                        )}
                        {store.acceptDeletes && (
                            <>
                                <AcceptText>
                                    One (or more) of your games has been
                                    suspended, and it will be removed from the
                                    bet slip.
                                </AcceptText>
                                <AcceptChangesBtn
                                    onClick={onClickAcceptDelete}
                                />
                            </>
                        )}
                        {!store.acceptChanges && !store.acceptDeletes && (
                            <BetslipChangeable />
                        )}
                    </BetslipFooter>
                </>
            )}
        </BetslipWrap>
    )
}

export default observer(BetslipModal)
