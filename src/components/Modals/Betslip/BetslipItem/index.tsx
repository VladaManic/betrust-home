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
    gameId: string | undefined
}

const BetslipItem = ({ singleBetslip, gameId }: Props) => {
    return (
        <SingleOddWrap>
            <SingleOddInner>
                <RemoveBtn singleBetslip={singleBetslip} />
                <OddData>
                    <OddHeader>
                        <OddValue
                            className={clsx(
                                storeBetslip.removedBets.length > 0 &&
                                    gameId !== undefined &&
                                    storeBetslip.removedBets.includes(
                                        parseInt(gameId)
                                    ) &&
                                    'removed'
                            )}
                        >
                            {singleBetslip.val}
                        </OddValue>
                        <OddPrice
                            className={clsx(
                                storeBetslip.removedBets.length > 0 &&
                                    gameId !== undefined &&
                                    storeBetslip.removedBets.includes(
                                        parseInt(gameId)
                                    ) &&
                                    'removed',
                                singleBetslip.newPrice !== undefined &&
                                    singleBetslip.newPrice !== null &&
                                    'change'
                            )}
                        >
                            {singleBetslip.price}
                        </OddPrice>
                    </OddHeader>
                    <OddType
                        className={clsx(
                            storeBetslip.removedBets.length > 0 &&
                                gameId !== undefined &&
                                storeBetslip.removedBets.includes(
                                    parseInt(gameId)
                                ) &&
                                'removed'
                        )}
                    >
                        {singleBetslip.type}
                    </OddType>
                    <OddTeams
                        className={clsx(
                            storeBetslip.removedBets.length > 0 &&
                                gameId !== undefined &&
                                storeBetslip.removedBets.includes(
                                    parseInt(gameId)
                                ) &&
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
