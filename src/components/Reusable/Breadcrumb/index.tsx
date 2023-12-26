import { useEffect } from 'react'
import store from '../../../store/store'
import { observer } from 'mobx-react'

import { BreadcrumbWrap, BreadcrumbItem } from './style'

interface Props {
    regionName: string | undefined
    competitionName: string | undefined
}

const Breadcrumb = ({ regionName, competitionName }: Props) => {
    useEffect(() => {
        //Set new value for page title
        if (competitionName === undefined) {
            store.setTitle(`${regionName} - In Play`)
        } else {
            store.setTitle(`${competitionName}`)
        }
    }, [competitionName, regionName])

    return (
        <BreadcrumbWrap>
            <BreadcrumbItem>Footeball &gt; </BreadcrumbItem>
            <BreadcrumbItem>{regionName}</BreadcrumbItem>
            {competitionName !== undefined && (
                <>
                    <BreadcrumbItem> &gt; </BreadcrumbItem>
                    <BreadcrumbItem>{competitionName}</BreadcrumbItem>
                </>
            )}
        </BreadcrumbWrap>
    )
}

export default observer(Breadcrumb)
