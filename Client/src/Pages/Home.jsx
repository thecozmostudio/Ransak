import React from 'react'
import Layout from '../Layout/Layout';
import { useTheme } from '../Context/ThemeProvider';

const Home = () => {
  const {activeTheme, mode } = useTheme();

  return (
    <Layout>
      <div className='p-6'>
        <h1
            style={{
              color: activeTheme.colors.primary,
            }}
            >
            Packaging Company ({mode} mode)
          </h1>

          <p 
          style={{ color: activeTheme.colors.secondary }}
          >
            We design and deliver custom packaging.
          </p>
      </div>
    </Layout>
  )
}

export default Home;
