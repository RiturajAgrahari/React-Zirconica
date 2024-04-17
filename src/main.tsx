import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/home_page/home.tsx'
import ConfirmEmail from './components/authentication/confirmEmail.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="Home/" element={<HomePage/>}></Route>
        <Route path="confirm-email/" element={<ConfirmEmail/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
