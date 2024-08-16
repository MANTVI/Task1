import React from 'react'
import { Outlet } from 'react-router-dom'
import { Breadcrumb } from './components/Breadcrumb'
import Footer from './components/Footer'
import Content from './components/Content'
import Header from './components/Header'
function Layout() {
    return (
        <>

            <Header />
            < Outlet />
            <Breadcrumb />
            <Content />
            <Footer />



        </>
    )
}

export default Layout
