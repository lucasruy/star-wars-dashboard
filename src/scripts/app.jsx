import React from 'react'
import ReactDOM from 'react-dom'

import TestComponent from './components/test-component/TestComponent.jsx'

const AppNode = document.getElementById('react-app')

ReactDOM.render(
  <TestComponent />, 
  AppNode
)