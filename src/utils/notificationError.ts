import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TOASTIFY_PARAMS } from '../constants/toastifyConstant'

const notificationError = (param: string) => {
    toast.error(
        'Sorry, there is no ' + param + ' with that ID!',
        TOASTIFY_PARAMS
    )
}

export default notificationError
