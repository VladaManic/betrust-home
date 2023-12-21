import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react'
import store from '../../store/store'

import Title from '../../components/Reusable/Title'
import Breadcrumb from '../../components/Reusable/Breadcrumb'
import League from '../../components/Reusable/League'
import EmptySingle from '../../components/Reusable/EmptySingle'
import Modal from '../../components/Reusable/Modal'
import BetslipModal from '../../components/Modals/BetslipModal'

import { SingleCompetitionWrap } from './style'
import { RegionObj, CompetitionObj } from '../../types/interfaces'

const SingleCompetition = () => {
    //Get URL
    const { regionName, competitionName } = useParams()
    //Get that region object from sportData store object
    const currentRegion = store.sport.region?.filter(
        (singelRegion: RegionObj) => singelRegion.name === regionName
    )
    //Get that competition object if there is correct region object
    const currentCompetition =
        currentRegion?.length !== 0 &&
        currentRegion![0].competition.filter(
            (singelCompetition: CompetitionObj) =>
                singelCompetition.name === competitionName
        )

    useEffect(() => {
        //Set new value for page title
        store.setTitle(`${competitionName}`)
    }, [])

    return (
        <SingleCompetitionWrap>
            <Title />
            <Breadcrumb
                regionName={regionName}
                competitionName={competitionName}
            />
            {/* If region exists */}
            {currentRegion?.length !== 0 ? (
                // If competition exists
                currentCompetition !== false &&
                currentCompetition.length !== 0 ? (
                    <League
                        singleCompetition={currentCompetition[0]}
                        regionName={regionName}
                    />
                ) : (
                    <EmptySingle text={'Competition'} />
                )
            ) : (
                <EmptySingle text={'Competition'} />
            )}
            {store.betslip.length !== 0 && (
                <Modal onClose={undefined} overlayDisplay={false}>
                    <BetslipModal />
                </Modal>
            )}
        </SingleCompetitionWrap>
    )
}

export default observer(SingleCompetition)
