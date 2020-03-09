import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import { Home } from './pages/Home'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const Application = () => (
  <Fragment>
    <GlobalStyle />
    <Home />
  </Fragment>
)

const AppNode = document.getElementById('react-app')

ReactDOM.render(<Application />, AppNode)
