import { createGlobalStyle } from 'styled-components'
import { color } from './variables'

export default createGlobalStyle`
    html,
    body,
    #root {
        height: 100%;
        min-height: 100%;
        margin: 0;
        overflow-x: hidden;
    }

    body {
        height: 100%;
        background-color: ${color.defaultBg};
        font-size: 100%;
        font-family: 'Axiforma', sans-serif;
				color: ${color.defaultText};
    }

    h1,
    h2,
    p {
        margin: 0;
    }

    h2, 
    h3 {
        font-family: 'Open Sans Bold', sans-serif;
        font-size: 16px;
        line-height: 22px;
    }

    p {
        font-size: 12px;
    }

    button {
        border: none;
        background: none;
        padding: 0;
        cursor: pointer;
    }

    img {
        max-width: 100%;
        height: auto;
        padding: 0;
        margin: 0;
    }

    #app-wrapper {
        display: flex;
    }

    #content-wrap {
       width: 100%;
    }
`
