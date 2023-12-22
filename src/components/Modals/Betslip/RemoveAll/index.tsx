import { observer } from 'mobx-react'
import store from '../../../../store/store'

import { RemoveWrap } from './style'

const RemoveAll = () => {
    //Click on 'Remove all' to remove all played odds at once
    const removeAllHandler = () => {
        store.setBetslipDeleteAll()
    }

    return <RemoveWrap onClick={removeAllHandler}>RemoveAll</RemoveWrap>
}

export default observer(RemoveAll)
