import { observer } from 'mobx-react'
import clsx from 'clsx'
import useAccordion from '../../../hooks/useAccordion'
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
import { RegionObj } from '../../../types/interfaces'

interface Props {
    singleRegion: RegionObj
}

const Region = ({ singleRegion }: Props) => {
    //Using custom hook for opening/closing region
    const { opened, setOpened } = useAccordion(false)

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
            <Competition singleRegion={singleRegion} opened={opened} />
        </RegionWrap>
    )
}

export default observer(Region)
