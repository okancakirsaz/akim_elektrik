import React from 'react'
import ReactDOM from 'react-dom/client'
import MainView from './views/main_view/view/main_view';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUsView from './views/about_us/view/about_us_view';
import ContactUsView from './views/contact_us/view/contact_us_view';
import CallServiceView from './views/call_service/view/call_service_view';
import PanelLoginView from './views/panel/panel_login/view/panel_login_view';
import ReferencesView from './views/references/view/references_view';
import PanelReferencesView from './views/panel/panel_references/view/panel_references_view';
import PanelSettingsView from './views/panel/panel_settings/view/panel_settings_view';
import PanelMessagesView from './views/panel/panel_messages/view/panel_messages_view';
import PanelSupportView from './views/panel/panel_support/view/panel_support_view';
import AddReference from './views/panel/panel_references/view/components/add_reference/add_reference';


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
    <Route path='/admin-references' index  element={<PanelReferencesView/>}/>
    <Route path='/admin-references/add-or-edit' index  element={<AddReference/>}/>
    <Route path='/admin-settings' index  element={<PanelSettingsView/>}/>
    <Route path='/admin-messages' index  element={<PanelMessagesView/>}/>
    <Route path='/admin-support' index  element={<PanelSupportView/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
