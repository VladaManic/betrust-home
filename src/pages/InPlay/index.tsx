import SportFilter from '../../components/InPlay/SportFilter'
import Content from '../../components/InPlay/Content'

import { InPlayWrap } from './style'

const InPlay = () => {
    return (
        <InPlayWrap>
            <SportFilter />
            <Content />
        </InPlayWrap>
    )
}

export default InPlay
