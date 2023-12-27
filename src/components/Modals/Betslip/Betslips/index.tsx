import { observer } from 'mobx-react'
import storeBetslip from '../../../../store/storeBetslip'

import BetslipItem from '../BetslipItem'

import { BetslipWrap } from './style'
import { BetSlipDataObj } from '../../../../types/interfaces'

const Betslips = () => {
    return (
        <BetslipWrap>
            {storeBetslip.betslip.map((singleBetlsip: BetSlipDataObj) => (
                <BetslipItem
                    key={singleBetlsip.eventId}
                    singleBetslip={singleBetlsip}
                    gameId={singleBetlsip.game}
                />
            ))}
        </BetslipWrap>
    )
}

export default observer(Betslips)
