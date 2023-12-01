import React from 'react'
import ReactDOM from 'react-dom/client'
import MainView from './views/main_view/view/main_view';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUsView from './views/about_us/view/about_us_view';
import ContactUsView from './views/contact_us/view/contact_us_view';
import CallServiceView from './views/call_service/view/call_service_view';
import PanelLoginView from './views/admin/panel_login/view/panel_login_view';
import ReferencesView from './views/references/view/references_view';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' index  element={<MainView/>}/>
    <Route path='/hakkimizda' index  element={<AboutUsView/>}/>
    <Route path='/iletisim' index  element={<ContactUsView/>}/>
    <Route path='/servis-cagir' index  element={<CallServiceView/>}/>
    <Route path='/panel' index  element={<PanelLoginView/>}/>
    <Route path='/referanslar' index  element={<ReferencesView/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
