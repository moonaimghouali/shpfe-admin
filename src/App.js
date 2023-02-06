import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Perimetres, Regions, Secteurs, Utilisateurs, Unites  } from './pages';

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <div>
         <Routes>
          <Route path ="/" element={(<Utilisateurs/>)} />
          <Route path ="/utilisateurs" element={(<Utilisateurs/>)} />
          <Route path ="/regions" element={(<Regions/>)} />
          <Route path ="/secteurs" element={(<Secteurs/>)} />
          <Route path ="/perimetres" element={(<Perimetres/>)} />
          <Route path ="/unites" element={(<Unites/>)} />
         </Routes>
       </div>
      </BrowserRouter>
    </div>
  )
}

export default App