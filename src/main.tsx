import React from 'react'
import ReactDOM from 'react-dom/client'
import MainView from './views/main_view/view/main_view';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' index  element={<MainView/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
