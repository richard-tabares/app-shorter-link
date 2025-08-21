import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import "./App.css"
import { Login } from './auth/componenst/Login.tsx'
import { App } from './App.tsx'
import { ShoterLinkPage } from './pages/ShoterLinkPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        <Route element={<App />}>

          <Route path="/" element={<ShoterLinkPage />} />

        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Navigate to='/' />} />


        //aca redicrección a ruta privadas cuand se loguee el usuario

      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
