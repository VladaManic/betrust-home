import { observer } from 'mobx-react'
import store from '../../store/store'

import SportFilter from '../../components/InPlay/SportFilter'
import Content from '../../components/InPlay/Content'

import { InPlayWrap } from './style'

const InPlay = () => {
    console.log(store.sport)

    return (
        <InPlayWrap>
            <SportFilter />
            <Content />
        </InPlayWrap>
    )
}

export default observer(InPlay)
