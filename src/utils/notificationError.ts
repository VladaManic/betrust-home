import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TOASTIFY_PARAMS } from '../constants/toastifyConstant'

const notificationError = () => {
    toast.error('Sorry, there is no game with that ID!', TOASTIFY_PARAMS)
}

export default notificationError
