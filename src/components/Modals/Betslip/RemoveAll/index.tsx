import { observer } from 'mobx-react'
import storeBetslip from '../../../../store/storeBetslip'

import { RemoveWrap } from './style'

const RemoveAll = () => {
    //Click on 'Remove all' to remove all played odds at once
    const removeAllHandler = () => {
        storeBetslip.setBetslipDeleteAll()
    }

    return <RemoveWrap onClick={removeAllHandler}>RemoveAll</RemoveWrap>
}

export default observer(RemoveAll)
