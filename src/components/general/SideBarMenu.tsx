import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import { ISideBarMenu } from './SideBarData';

interface SideBarMenuProps {
  key:number;
  menuItem:ISideBarMenu
}

const SideBarMenu:React.FC<SideBarMenuProps> = ({key, menuItem}) => {
  const [show, setShow] = useState(false)

  const navigate = useNavigate()
  const {name, icon, path} = menuItem

  const onExpand = () => {
      if(menuItem.submenu)
        setShow(!show)
      else 
        navigate(menuItem.path)
  }

  return (
    <li key={key} onClick={onExpand}>
      <a className='nav-link px2 nav-item'>
        <i className={icon}><span className='ms-1 d-none d-sm-inline'>{name}</span></i>
      </a>
      {show ? 
            <ul className='sub-menu'>
            {menuItem.submenu?.map((item, key)=>{
              return <SideBarMenu key={key} menuItem={item} />
            })}
         </ul> 
      : ''}
      
    </li>
  )
}

export default SideBarMenu