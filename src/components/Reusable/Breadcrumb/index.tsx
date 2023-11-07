import { BreadcrumbWrap, BreadcrumbItem } from './style'

interface Props {
    regionName: string | undefined
}

const Breadcrumb = ({ regionName }: Props) => {
    return (
        <BreadcrumbWrap>
            <BreadcrumbItem>Footeball &gt; </BreadcrumbItem>
            <BreadcrumbItem>{regionName}</BreadcrumbItem>
        </BreadcrumbWrap>
    )
}

export default Breadcrumb
