import React from 'react'
import './App.css'
import router from './Router/router'
import { RouterProvider } from 'react-router-dom'


export default function App() {
    
  return (
      <RouterProvider router={router} />
  )
}

