import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import PageNotFound from './Pages/PageNotFound.jsx';
import { useTheme } from './Context/ThemeProvider.jsx';

function App() {
  const [count, setCount] = useState(0)
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
          {/* <div className='absolute -bottom-20 -right-30 w-[600px] h-[600px] bg-gradient-to-tr
          from-teal-500/20 to-blue-500/20 dark:from-amber-400/20 dark:to-amber-800/20 rounded-full blur-[80px]'></div>
          <div className=' absolute -top-28 -left-10 w-[600px] h-[600px] bg-gradient-to-tr
          from-teal-500/20 to-blue-500/20 dark:from-amber-400/20 dark:to-amber-800/20 rounded-full blur-[80px]'></div> */}
          <div className= 'overflow-hidden'>

            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='*' element={<PageNotFound/>} />
            </Routes>
          </div>
        </main>
      </div>
    </>      
  )
}

export default App
