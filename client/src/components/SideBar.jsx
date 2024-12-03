import React from 'react'
import { NavLink } from 'react-router-dom'
import { navlinks } from '../utils/consts'

const SideBar = () => {
    return (
        <aside >
            <div >RentalManager</div>
            <div className='nav-list'>
                {
                    navlinks.map(e => (
                        <NavLink key={e.label} className='nav-link ' to={e.href}>{e.label}</NavLink>
                    ))
                }
            </div>
        </aside>)
}

export default SideBar