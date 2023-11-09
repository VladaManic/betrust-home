import { InputWrap } from './style'

interface Props {
    type: string
    name: string
    placeholder: string
}

const InputField = ({ type, name, placeholder }: Props) => {
    return <InputWrap type={type} name={name} placeholder={placeholder} />
}

export default InputField
