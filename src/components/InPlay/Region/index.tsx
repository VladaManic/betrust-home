import chooseFlag from '../../../utils/chooseFlag'

import Competition from '../Competition'

import arrowIcon from '../../../assets/img/arrow.svg'
import {
    RegionWrap,
    RegionTitleWrap,
    RegionTitleInner,
    RegionFlag,
    RegionTitle,
    RegionArrowWrap,
    RegionArrow,
} from './style'
import { RegionObj, CompetitionObj } from '../../../types/interfaces'

interface Props {
    singleRegion: RegionObj
}

const Region = ({ singleRegion }: Props) => {
    return (
        <RegionWrap>
            <RegionTitleWrap>
                <RegionTitleInner>
                    <RegionFlag
                        src={chooseFlag(singleRegion.name)}
                        alt={singleRegion.name}
                    />
                    <RegionTitle>{singleRegion.name}</RegionTitle>
                </RegionTitleInner>
                <RegionArrowWrap>
                    <RegionArrow src={arrowIcon} alt="Arrow icon" />
                </RegionArrowWrap>
            </RegionTitleWrap>
            {singleRegion.competition.map(
                (singleCompetition: CompetitionObj) => (
                    <Competition
                        key={singleCompetition.name}
                        singleCompetition={singleCompetition}
                        regionName={singleRegion.name}
                    />
                )
            )}
        </RegionWrap>
    )
}

export default Region
