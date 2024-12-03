import React from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <section>
            <SideBar />
            <div className='content'>
                <Header />
                <main className='container'>
                    <Outlet />
                </main>
            </div>
        </section>
    )
}

export default Layout