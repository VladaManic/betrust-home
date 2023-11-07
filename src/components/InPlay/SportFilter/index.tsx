import SportFilterBtn from '../SportFilterBtn'

import popularIcon from '../../../assets/img/fav.svg'
import footballIcon from '../../../assets/img/fb.svg'
import basketballIcon from '../../../assets/img/bb.svg'
import handballIcon from '../../../assets/img/hb.svg'
import rugbyIcon from '../../../assets/img/rg.svg'
import tennisIcon from '../../../assets/img/tn.svg'
import volleyballIcon from '../../../assets/img/vb.svg'
import { SportFilterWrap } from './style'

const SportFilter = () => {
    return (
        <SportFilterWrap>
            <SportFilterBtn img={popularIcon} title="Popular" />
            <SportFilterBtn img={footballIcon} title="Football" />
            <SportFilterBtn img={basketballIcon} title="Basketball" />
            <SportFilterBtn img={handballIcon} title="Handball" />
            <SportFilterBtn img={rugbyIcon} title="American Football" />
            <SportFilterBtn img={tennisIcon} title="Tennis" />
            <SportFilterBtn img={volleyballIcon} title="Volleyball" />
        </SportFilterWrap>
    )
}

export default SportFilter
