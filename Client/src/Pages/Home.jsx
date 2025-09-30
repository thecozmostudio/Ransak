import React from 'react'
import Layout from '../Layout/Layout';
import { useTheme } from '../Context/ThemeProvider';
import Carousel from '../Components/Carousel';

const Home = () => {
  const {activeTheme, mode } = useTheme();

  return (
    <Layout>
      <div className="relative w-full h-screen ">
        {/* Carousel in background */}
        <Carousel />

        {/* Overlay content */}
        {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1
            className="text-4xl md:text-6xl font-bold drop-shadow-lg"
            style={{ color: activeTheme.colors.primary }}
          >
            Packaging Company ({mode} mode)
          </h1>

          <p
            className="mt-4 text-lg md:text-2xl drop-shadow-lg"
            style={{ color: activeTheme.colors.secondary }}
          >
            We design and deliver custom packaging.
          </p>
        </div> */}
      </div>
    </Layout>
  )
}

export default Home;
