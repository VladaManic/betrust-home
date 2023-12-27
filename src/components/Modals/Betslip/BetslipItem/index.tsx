import { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import storeBetslip from '../../../../store/storeBetslip'
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
    const currentPrice = storeBetslip.currentPrice(singleBetslip)

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
                                storeBetslip.deletedBets.length > 0 &&
                                    gameId !== undefined &&
                                    storeBetslip.gameRemoved(
                                        parseInt(gameId)
                                    ) &&
                                    'removed'
                            )}
                        >
                            {singleBetslip.val}
                        </OddValue>
                        <OddPrice
                            className={clsx(
                                storeBetslip.deletedBets.length > 0 &&
                                    gameId !== undefined &&
                                    storeBetslip.gameRemoved(
                                        parseInt(gameId)
                                    ) &&
                                    'removed',
                                storeBetslip.acceptChanges &&
                                    currentPrice!.toString() !== priceVal &&
                                    'change'
                            )}
                        >
                            {singleBetslip.price}
                        </OddPrice>
                    </OddHeader>
                    <OddType
                        className={clsx(
                            storeBetslip.deletedBets.length > 0 &&
                                gameId !== undefined &&
                                storeBetslip.gameRemoved(parseInt(gameId)) &&
                                'removed'
                        )}
                    >
                        {singleBetslip.type}
                    </OddType>
                    <OddTeams
                        className={clsx(
                            storeBetslip.deletedBets.length > 0 &&
                                gameId !== undefined &&
                                storeBetslip.gameRemoved(parseInt(gameId)) &&
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
