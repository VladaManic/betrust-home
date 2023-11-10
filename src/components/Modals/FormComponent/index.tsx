import { useRef } from 'react'
import { observer } from 'mobx-react'
import store from '../../../store/store'
import { ToastContainer } from 'react-toastify'
import notificationError from '../../../utils/notificationError'

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
            case 'update-odd':
                !store.setUpdateOdd(id) && notificationError()
                break
            case 'update-score':
                !store.setUpdateScore(id) && notificationError()
                break
            case 'update-time':
                !store.setUpdateTime(id) && notificationError()
                break
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
