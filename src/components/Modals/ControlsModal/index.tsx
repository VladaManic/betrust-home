import FormComponent from '../FormComponent'

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
                            <FormComponent
                                name="delete-region"
                                placeholder="region id"
                                value="DELETE"
                            />
                        </TableCell>
                        <TableCell>
                            <FormComponent
                                name="add-region"
                                placeholder="sport id"
                                value="ADD"
                            />
                        </TableCell>
                        <TableCell>
                            <FormComponent
                                name="delete-region"
                                placeholder="game id"
                                value="UPDATE"
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHeader>Delete league by id</TableHeader>
                        <TableHeader>Add League</TableHeader>
                        <TableHeader>Update score for team 1 (+ 1)</TableHeader>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <FormComponent
                                name="delete-league"
                                placeholder="league id"
                                value="DELETE"
                            />
                        </TableCell>
                        <TableCell>
                            <FormComponent
                                name="add-league"
                                placeholder="region id"
                                value="ADD"
                            />
                        </TableCell>
                        <TableCell>
                            <FormComponent
                                name="update-score"
                                placeholder="game id"
                                value="UPDATE"
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHeader>Delete game by id</TableHeader>
                        <TableHeader>Add Game</TableHeader>
                        <TableHeader>Update time (+ 1)</TableHeader>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <FormComponent
                                name="delete-game"
                                placeholder="game id"
                                value="DELETE"
                            />
                        </TableCell>
                        <TableCell>
                            <FormComponent
                                name="add-game"
                                placeholder="league id"
                                value="ADD"
                            />
                        </TableCell>
                        <TableCell>
                            <FormComponent
                                name="update-time"
                                placeholder="game id"
                                value="UPDATE"
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableFoot></TableFoot>
            </TableWrap>
        </ModalWrap>
    )
}

export default ControlsModal
