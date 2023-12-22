import { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import store from '../../../../store/store'
import clsx from 'clsx'

import RemoveBtn from '../RemoveBtn'

import {
    SingleOddWrap,
    SingleOddInner,
    OddData,
    OddHeader,
    OddValue,
    OddPrice,
    OddType,
    OddTeams,
} from './style'
import { BetSlipDataObj, EventObj } from '../../../../types/interfaces'

interface Props {
    singleBetslip: BetSlipDataObj
    acceptVal: boolean
    gameId: string | undefined
}

const BetslipItem = ({ singleBetslip, acceptVal, gameId }: Props) => {
    const [priceVal, setPriceVal] = useState<string | undefined>(
        singleBetslip.price
    )

    //Getting price for odd from sport data for comparation
    let currentPrice: number = 0
    for (const singleRegion of store.sport.region!) {
        for (const singleCompetition of singleRegion.competition) {
            for (const singleGame of singleCompetition.game) {
                for (const singleMarket of singleGame.market) {
                    //Finding market with correct id
                    if (singleMarket.id.toString() === singleBetslip.id) {
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
                    }
                }
            }
        }
    }

    useEffect(() => {
        setPriceVal(currentPrice.toString())
    }, [acceptVal])

    return (
        <SingleOddWrap>
            <SingleOddInner>
                <RemoveBtn singleBetslip={singleBetslip} />
                <OddData>
                    <OddHeader>
                        <OddValue
                            className={clsx(
                                store.acceptDeletes &&
                                    gameId !== undefined &&
                                    store.gamesRemoved.includes(
                                        parseInt(gameId)
                                    ) &&
                                    'removed'
                            )}
                        >
                            {singleBetslip.val}
                        </OddValue>
                        <OddPrice
                            className={clsx(
                                store.acceptDeletes &&
                                    gameId !== undefined &&
                                    store.gamesRemoved.includes(
                                        parseInt(gameId)
                                    ) &&
                                    'removed',
                                store.acceptChanges &&
                                    currentPrice.toString() !== priceVal &&
                                    'change'
                            )}
                        >
                            {priceVal}
                        </OddPrice>
                    </OddHeader>
                    <OddType
                        className={clsx(
                            store.acceptDeletes &&
                                gameId !== undefined &&
                                store.gamesRemoved.includes(parseInt(gameId)) &&
                                'removed'
                        )}
                    >
                        {singleBetslip.type}
                    </OddType>
                    <OddTeams
                        className={clsx(
                            store.acceptDeletes &&
                                gameId !== undefined &&
                                store.gamesRemoved.includes(parseInt(gameId)) &&
                                'removed'
                        )}
                    >
                        {singleBetslip.teams}
                    </OddTeams>
                </OddData>
            </SingleOddInner>
        </SingleOddWrap>
    )
}

export default observer(BetslipItem)
