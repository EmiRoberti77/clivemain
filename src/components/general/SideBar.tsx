import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/SideBar.css'
import { SideBarData } from './SideBarData'
import SideBarMenu from './SideBarMenu'

const SideBar:React.FC = () => {

  return (
    <div className='sidebar-menu'>
        <div>
            <ul className='no-bullet'>
              {SideBarData.map((item, key)=>{ return <SideBarMenu key={key} menuItem={item}/>})}
            </ul>
        </div>
    </div>
  )
}

export default SideBar