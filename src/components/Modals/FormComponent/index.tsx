import { useRef } from 'react'
import { observer } from 'mobx-react'
import store from '../../../store/store'

import { FormWrap, InputWrap, SubmitWrap } from './style'

interface Props {
    name: string
    placeholder: string
    value: string
}

const FormComponent = ({ name, placeholder, value }: Props) => {
    const inputVal = useRef<HTMLInputElement | null>(null)

    // const onChangeVal = () => {
    //     console.log(inputVal.current!.value)
    // }

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const id = parseInt(inputVal.current!.value)
        store.setUpdate(id)
    }

    return (
        <FormWrap onSubmit={onSubmitHandler}>
            <InputWrap
                //onChange={onChangeVal}
                type="text"
                name={name}
                placeholder={placeholder}
                ref={inputVal}
            />
            <SubmitWrap>{value}</SubmitWrap>
        </FormWrap>
    )
}

export default observer(FormComponent)
