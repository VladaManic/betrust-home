import { observer } from 'mobx-react'
import storeBetslip from '../../../../store/storeBetslip'

import BetslipItem from '../BetslipItem'

import { BetslipWrap } from './style'
import { BetSlipDataObj } from '../../../../types/interfaces'

interface Props {
    acceptVal: boolean
}

const Betslips = ({ acceptVal }: Props) => {
    return (
        <BetslipWrap>
            {storeBetslip.betslip.map((singleBetlsip: BetSlipDataObj) => (
                <BetslipItem
                    key={singleBetlsip.eventId}
                    singleBetslip={singleBetlsip}
                    acceptVal={acceptVal}
                    gameId={singleBetlsip.game}
                />
            ))}
        </BetslipWrap>
    )
}

export default observer(Betslips)
