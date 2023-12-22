import { observer } from 'mobx-react'
import store from '../../../../store/store'

import BetslipItem from '../BetslipItem'

import { BetslipWrap } from './style'
import { BetSlipDataObj } from '../../../../types/interfaces'

interface Props {
    acceptVal: boolean
}

const Betslips = ({ acceptVal }: Props) => {
    return (
        <BetslipWrap>
            {store.betslip.map((singleBetlsip: BetSlipDataObj) => (
                <BetslipItem
                    key={singleBetlsip.subid}
                    singleBetslip={singleBetlsip}
                    acceptVal={acceptVal}
                    gameId={singleBetlsip.game}
                />
            ))}
        </BetslipWrap>
    )
}

export default observer(Betslips)
