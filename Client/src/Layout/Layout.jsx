import React from 'react';
import Header from './header.jsx'; // Make sure the file name matches exactly
import { Helmet } from "react-helmet";
import { useTheme } from '../Context/ThemeProvider.jsx';

const Layout = ({ children, title, description, keywords, author }) => {
  const { activeTheme } = useTheme()

  return (
    <div className="flex flex-col min-h-screen text-gray-800"
    style={{
      backgroundColor: activeTheme.colors.background,
    }}
    >
      <Helmet>
        <meta charSet='utf-8' />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <Header />
      <main className="flex-1 ">
        {/* <Toaster /> */}
        {children}
      </main>
    </div>
  );
};

Layout.defaultProps = {
  title: "Ransak",
  description: "Ransak Packaging",
  keywords: "react, node",
  author: "CozmoStudio"
};

export default Layout;
