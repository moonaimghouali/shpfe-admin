import React from 'react'
import { PageHeader } from '../components'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group } from '@syncfusion/ej2-react-grids';
import { Inject, Page, Sort } from '@syncfusion/ej2-react-grids';

import {regions} from '../data/regionsData'


const Regions = () => {
  return (
    <div className='m-4 rounded-sm pt-4 pl-8 pr-4 bg-white w-full'>
      <PageHeader className="mb-10" pageName="Regions"/>  
    
     <div className="w-2/3 mt-10">
     <GridComponent dataSource={regions} allowPaging={true}  allowSorting={true}  allowFiltering={false} pageSettings={{pageSize:10}} >
       <Inject services={[Page, Sort, Filter, Group]}/>
     </GridComponent>
     </div>
    
    </div>
  )
}

export default Regions