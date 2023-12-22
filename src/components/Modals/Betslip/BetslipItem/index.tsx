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
import { BetSlipDataObj } from '../../../../types/interfaces'

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
    const currentPrice = store.currentPrice(singleBetslip)

    useEffect(() => {
        setPriceVal(currentPrice!.toString())
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
                                    currentPrice!.toString() !== priceVal &&
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
