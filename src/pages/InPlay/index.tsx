import SportFilter from '../../components/InPlay/SportFilter'
import Title from '../../components/Reusable/Title'
import Content from '../../components/InPlay/Content'

import { InPlayWrap } from './style'

const InPlay = () => {
    return (
        <InPlayWrap>
            <SportFilter />
            <Title />
            <Content />
        </InPlayWrap>
    )
}

export default InPlay
