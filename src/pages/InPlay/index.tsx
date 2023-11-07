import { useEffect } from 'react'
import { observer } from 'mobx-react'
import store from '../../store/store'

import SportFilter from '../../components/InPlay/SportFilter'
import Title from '../../components/Reusable/Title'
import Content from '../../components/InPlay/Content'

import { InPlayWrap } from './style'

const InPlay = () => {
    useEffect(() => {
        //Reset value for page title
        store.setTitle('Football - In Play')
    }, [])

    return (
        <InPlayWrap>
            <SportFilter />
            <Title />
            <Content />
        </InPlayWrap>
    )
}

export default observer(InPlay)
