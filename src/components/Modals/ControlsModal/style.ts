import styled from 'styled-components'
import { color } from '../../../shared/styles/variables'

export const ModalWrap = styled.div`
    psition: fixed;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    border-radius: 30px;
    background-color: ${color.sidebarBg};
    font-family: 'Open Sans SemiBold', sans-serif;
    font-size: 12px;
`

export const TableWrap = styled.table``

export const TableHead = styled.thead``

export const TableBody = styled.tbody``

export const TableFoot = styled.tfoot``

export const TableRow = styled.tr`
    display: flex;
    width: 700px;
`

export const TableHeader = styled.th`
    flex-basis: 33.3%;
    margin-bottom: 10px;
    text-align: left;
`

export const TableCell = styled.td`
    flex-basis: 33.3%;
`
