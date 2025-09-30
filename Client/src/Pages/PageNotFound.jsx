import React from 'react'
import Layout from './../Layout/Layout';

const PageNotFound = () => {
  return (
    <Layout>
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600 dark:text-red-400">
          404 - Page Not Found
        </h1>
      </div>
    </Layout>
  )
}


export default PageNotFound;