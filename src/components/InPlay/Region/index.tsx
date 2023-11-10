import { observer } from 'mobx-react'
import { orderBy } from 'lodash'
import clsx from 'clsx'
import useAccordion from '../../../hooks/useAccordion'
import chooseFlag from '../../../utils/chooseFlag'

import Competition from '../../Reusable/Competition'

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
    //Using custom hook for opening/closing region
    const { opened, setOpened } = useAccordion(false)
    //Sort competitions by order
    const competionsSorted = orderBy(singleRegion.competition, ['order'])

    return (
        <RegionWrap className={clsx(opened && 'active')}>
            <RegionTitleWrap
                className="region-title"
                onClick={() => setOpened((curr: boolean) => !curr)}
            >
                <RegionTitleInner>
                    <RegionFlag
                        src={chooseFlag(singleRegion.name)}
                        alt={singleRegion.name}
                    />
                    <RegionTitle>{singleRegion.name}</RegionTitle>
                </RegionTitleInner>
                <RegionArrowWrap>
                    <RegionArrow
                        src={arrowIcon}
                        alt="Arrow icon"
                        className="region-arrow"
                    />
                </RegionArrowWrap>
            </RegionTitleWrap>
            {opened && (
                <>
                    {competionsSorted.map(
                        (singleCompetition: CompetitionObj) => (
                            <Competition
                                key={singleCompetition.name}
                                singleCompetition={singleCompetition}
                                regionName={singleRegion.name}
                            />
                        )
                    )}
                </>
            )}
        </RegionWrap>
    )
}

export default observer(Region)
