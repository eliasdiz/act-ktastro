import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../Components/SideBar/SideBar'

export default function MainLayout() {
    return (
    <div className='flex'>
        <SideBar />
        <Outlet/>
    </div>
    )
}
