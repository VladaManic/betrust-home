import { LoaderWrap, LoaderInner } from './style'

const Loader = () => {
    return (
        <LoaderWrap className="loader-wrap">
            <LoaderInner className="loader-inner"></LoaderInner>
        </LoaderWrap>
    )
}

export default Loader
