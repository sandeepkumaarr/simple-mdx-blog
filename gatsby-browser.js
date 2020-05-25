/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Theme from "./src/themes/theme"

const GlobalStyle = createGlobalStyle`
    
    * {
        box-sizing: border-box;
        margin:0;
        padding:0;
    }

    body, html{
        font-family: ${props => props.theme.fonts.main};
        height: 100px;
        background-color: ${props => props.theme.colors.light1};
    }
`

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        {element}
    </ThemeProvider>
)