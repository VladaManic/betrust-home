import { observer } from 'mobx-react'
import store from '../../../../store/store'

import removeIcon from '../../../../assets/img/remove.svg'
import { RemoveIconWrap, RemoveIcon } from './style'
import { BetSlipDataObj } from '../../../../types/interfaces'

interface Props {
    singleBetslip: BetSlipDataObj
}

const RemoveBtn = ({ singleBetslip }: Props) => {
    //Click on X to remove specific odd
    const onClickHandler = () => {
        const subId = singleBetslip.subid
        store.setBetslipDeleteOne(subId)
    }

    return (
        <RemoveIconWrap>
            <RemoveIcon
                src={removeIcon}
                alt="Remove icon"
                onClick={onClickHandler}
            />
        </RemoveIconWrap>
    )
}

export default observer(RemoveBtn)
