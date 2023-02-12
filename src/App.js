import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Perimetres, Regions, Secteurs, Utilisateurs, Unites, Test  } from './pages';
import { Sidebar } from './components';
import {GridComponent, ColumnDirective, ColumnsDirective} from '@syncfusion/ej2-react-grids'
import {employeesData} from './data/data'

import "./app.css"

const App = () => {
  return (
    <div className='bg-white '>
      
      <BrowserRouter>
       <div className='flex'>
       <Sidebar/>
         <Routes>
          <Route path ="/" element={(<Test/>)} />
          <Route path ="/utilisateurs" element={(<Utilisateurs/>)} />
          <Route path ="/regions" element={(<Regions/>)} />
          <Route path ="/secteurs" element={(<Secteurs/>)} />
          <Route path ="/perimetres" element={(<Perimetres/>)} />
          <Route path ="/unites" element={(<Unites/>)} />
          <Route path ="/test" element={(<Test/>)} />
         </Routes>
       </div>
      </BrowserRouter>
    </div>
  )
}

export default App