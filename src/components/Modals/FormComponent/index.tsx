import { useRef } from 'react'
import { observer } from 'mobx-react'
import store from '../../../store/store'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TOASTIFY_PARAMS } from '../../../constants/toastifyConstant'

import { FormWrap, InputWrap, SubmitWrap } from './style'

interface Props {
    name: string
    placeholder: string
    value: string
}

const FormComponent = ({ name, placeholder, value }: Props) => {
    const inputVal = useRef<HTMLInputElement | null>(null)

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const id = parseInt(inputVal.current!.value)
        //Different types of actions depending on submit btn clicked
        switch (name) {
            case 'update-time':
                !store.setUpdateTime(id) &&
                    toast.error(
                        'Sorry, there is no game with that ID!',
                        TOASTIFY_PARAMS
                    )
                break
            default:
                console.log(`Sorry, we are out of ${name}.`)
        }
    }

    return (
        <FormWrap onSubmit={onSubmitHandler} id={name}>
            <InputWrap
                type="text"
                name={name}
                placeholder={placeholder}
                ref={inputVal}
            />
            <SubmitWrap>{value}</SubmitWrap>
            <ToastContainer />
        </FormWrap>
    )
}

export default observer(FormComponent)
