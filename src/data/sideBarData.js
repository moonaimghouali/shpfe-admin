import { FiUsers} from 'react-icons/fi'
import {GiOilRig, GiOilPump} from 'react-icons/gi'
import { TbBuildingFactory} from 'react-icons/tb'

export const links = [
    {
      name: 'Utilisateurs',
      path : "/utilisateurs",
      icon: <FiUsers size={18}/>,
    },
    {
      name: 'Regions',
      path : "/regions",
      icon: <FiUsers size={18}/>,
    },
    {
      name: 'Secteurs',
      path : "/secteurs",
      icon: <FiUsers size={18}/>,
    },
    {
      name: 'Perimetres',
      path : "/perimetres",
      icon: <GiOilPump size={20}/>,
    },
    {
      name: 'Unites',
      path : "/unites",
      icon: <TbBuildingFactory size={18}/>,
    },
    
  ]