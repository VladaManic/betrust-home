import { BreadcrumbWrap, BreadcrumbItem } from './style'

interface Props {
    regionName: string | undefined
    competitionName: string | undefined
}

const Breadcrumb = ({ regionName, competitionName }: Props) => {
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

export default Breadcrumb
