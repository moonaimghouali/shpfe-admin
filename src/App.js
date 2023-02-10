import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Perimetres, Regions, Secteurs, Utilisateurs, Unites  } from './pages';
import { Sidebar } from './components';
import {GridComponent, ColumnDirective, ColumnsDirective} from '@syncfusion/ej2-react-grids'
import {employeesData} from './data/data'
import "./app.css"

const App = () => {
  return (
    <div className='bg-gray-100'>
      <BrowserRouter>
       <div className='flex'>
       <Sidebar/>
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