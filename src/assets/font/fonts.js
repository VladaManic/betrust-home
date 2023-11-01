import { createGlobalStyle } from 'styled-components';

import AxiformaRegularWoff from './Axiforma-Regular.woff';
import AxiformaRegularWoff2 from './Axiforma-Regular.woff2';
import OpenSansBoldTtf from './OpenSans-Bold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Axiforma';
        src: url(${AxiformaRegularWoff}) format('woff'), url(${AxiformaRegularWoff2}) format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Open Sans';
        src: url(${OpenSansBoldTtf}) format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }
`;
