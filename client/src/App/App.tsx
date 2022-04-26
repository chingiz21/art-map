import React from 'react'
import MainPage from '../pages/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authorization from '../pages/Authorization/Authorization';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth' element={<Authorization />} />
        <Route path='/login' element={<Authorization />} />
      </Routes>
    </Router>
  )
}

export default App