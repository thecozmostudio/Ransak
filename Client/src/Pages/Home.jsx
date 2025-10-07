import React from 'react'
import { useTheme } from '../Context/ThemeProvider';
import Carousel from '../Components/Carousel';

const Home = () => {
  const {activeTheme } = useTheme();

  return (
      <div id='home' className="relative w-full h-screen ">
        {/* Carousel in background */}
        <Carousel />

        {/* Overlay content */}
        <div className="z-20 absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1
            className="text-4xl md:text-6xl font-bold drop-shadow-lg"
            style={{ color: activeTheme.colors.primary }}
          >
            Welcome to Ransak Packaging 
          </h1>
        </div>
      </div>
  )
}

export default Home;
