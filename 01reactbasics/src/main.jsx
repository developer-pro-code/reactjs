import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './Aditya.jsx'

//create element in react

const ReactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'welcome to google'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hello />
  </StrictMode>,
)
