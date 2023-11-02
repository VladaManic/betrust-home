import SportFilter from '../../components/InPlay/SportFilter'
import { useEffect } from 'react'
import { observer } from 'mobx-react'
import store from '../../store/store'

import { InPlayWrap } from './style'

const InPlay = () => {
    useEffect(() => {
        console.log(store.sport)
    }, [])

    return (
        <InPlayWrap>
            <SportFilter />
        </InPlayWrap>
    )
}

export default observer(InPlay)
