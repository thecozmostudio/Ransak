// import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import { useTheme } from './Context/ThemeProvider.jsx';
import Header from './Layout/header.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  const { activeTheme } = useTheme()

  return (
    <>
    <div 
    // className='bg-gray-50 dark:bg-gray-900/90'
      style={{
        backgroundColor: activeTheme.colors.background,
        color: activeTheme.colors.text,
        minHeight: "100vh", // make sure it covers the whole screen
      }}
    >
        <main className='relative min-h-screen overflow-x-hidden'>
          <div className= 'overflow-hidden'>
            <Toaster />
            <Header />
            <Home />
            <ContactUs />

            {/* <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='*' element={<PageNotFound/>} />
            </Routes> */}
          </div>
        </main>
      </div>
    </>      
  )
}

export default App
