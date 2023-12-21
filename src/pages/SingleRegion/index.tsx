import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react'
import store from '../../store/store'
import { orderBy } from 'lodash'

import Title from '../../components/Reusable/Title'
import Breadcrumb from '../../components/Reusable/Breadcrumb'
import Competition from '../../components/Reusable/Competition'
import EmptySingle from '../../components/Reusable/EmptySingle'
import Modal from '../../components/Reusable/Modal'
import BetslipModal from '../../components/Modals/BetslipModal'

import { SingleRegionWrap } from './style'
import { RegionObj, CompetitionObj } from '../../types/interfaces'

const SingleRegion = () => {
    //Get URL
    const { regionName } = useParams()
    //Get that region object from sportData store object
    const currentRegion = store.sport.region?.filter(
        (singelRegion: RegionObj) => singelRegion.name === regionName
    )
    //Sort competitions inside region
    const competionsSorted =
        currentRegion?.length !== 0 &&
        orderBy(currentRegion![0].competition, ['order'])

    useEffect(() => {
        //Set new value for page title
        store.setTitle(`${regionName} - In Play`)
    }, [])

    return (
        <SingleRegionWrap>
            <Title />
            <Breadcrumb regionName={regionName} competitionName={undefined} />
            {currentRegion?.length !== 0 ? (
                competionsSorted !== false ? (
                    competionsSorted.map(
                        (singleCompetition: CompetitionObj) => (
                            <Competition
                                key={singleCompetition.name}
                                singleCompetition={singleCompetition}
                                regionName={regionName}
                            />
                        )
                    )
                ) : (
                    <EmptySingle text={'Region'} />
                )
            ) : (
                <EmptySingle text={'Region'} />
            )}
            {store.betslip.length !== 0 && (
                <Modal onClose={undefined} overlayDisplay={false}>
                    <BetslipModal />
                </Modal>
            )}
        </SingleRegionWrap>
    )
}

export default observer(SingleRegion)
