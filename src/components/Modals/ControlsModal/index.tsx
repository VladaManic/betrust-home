import InputWrap from '../InputField'
import SubmitBtn from '../SubmitBtn'

import {
    ModalWrap,
    TableWrap,
    TableHead,
    TableBody,
    TableFoot,
    TableRow,
    TableHeader,
    TableCell,
} from './style'

const ControlsModal = () => {
    return (
        <ModalWrap>
            <TableWrap>
                <TableHead></TableHead>
                <TableBody>
                    <TableRow>
                        <TableHeader>Delete region by id</TableHeader>
                        <TableHeader>Add Region</TableHeader>
                        <TableHeader>Update odd</TableHeader>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <InputWrap
                                type="text"
                                name="delete-region"
                                placeholder="region id"
                            />
                        </TableCell>
                        <TableCell>
                            <SubmitBtn value="DELETE" />
                        </TableCell>
                        <TableCell>
                            <InputWrap
                                type="text"
                                name="add-region"
                                placeholder="sport id"
                            />
                        </TableCell>
                        <TableCell>
                            <SubmitBtn value="ADD" />
                        </TableCell>
                        <TableCell>
                            <InputWrap
                                type="text"
                                name="delete-region"
                                placeholder="game id"
                            />
                        </TableCell>
                        <TableCell>
                            <SubmitBtn value="UPDATE" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHeader>Delete league by id</TableHeader>
                        <TableHeader>Add League</TableHeader>
                        <TableHeader>Update score for team 1 (+ 1)</TableHeader>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <InputWrap
                                type="text"
                                name="delete-league"
                                placeholder="league id"
                            />
                        </TableCell>
                        <TableCell>
                            <SubmitBtn value="DELETE" />
                        </TableCell>
                        <TableCell>
                            <InputWrap
                                type="text"
                                name="add-league"
                                placeholder="region id"
                            />
                        </TableCell>
                        <TableCell>
                            <SubmitBtn value="ADD" />
                        </TableCell>
                        <TableCell>
                            <InputWrap
                                type="text"
                                name="update-score"
                                placeholder="game id"
                            />
                        </TableCell>
                        <TableCell>
                            <SubmitBtn value="UPDATE" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHeader>Delete game by id</TableHeader>
                        <TableHeader>Add Game</TableHeader>
                        <TableHeader>Update time (+ 1)</TableHeader>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <InputWrap
                                type="text"
                                name="delete-game"
                                placeholder="game id"
                            />
                        </TableCell>
                        <TableCell>
                            <SubmitBtn value="DELETE" />
                        </TableCell>
                        <TableCell>
                            <InputWrap
                                type="text"
                                name="add-game"
                                placeholder="league id"
                            />
                        </TableCell>
                        <TableCell>
                            <SubmitBtn value="ADD" />
                        </TableCell>
                        <TableCell>
                            <InputWrap
                                type="text"
                                name="update-time"
                                placeholder="game id"
                            />
                        </TableCell>
                        <TableCell>
                            <SubmitBtn value="UPDATE" />
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableFoot></TableFoot>
            </TableWrap>
        </ModalWrap>
    )
}

export default ControlsModal
