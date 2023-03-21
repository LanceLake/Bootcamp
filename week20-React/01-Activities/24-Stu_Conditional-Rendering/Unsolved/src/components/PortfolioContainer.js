import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  // Answer: This method is used to render the page based on the current page state.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* 
	  // TODO: Add a comment describing what we are passing as props
	  // Answer: We are passing the current page state and the handlePageChange method as props.
	  */}

      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* 
	  // TODO: Add a comment explaining what is happening on the following line 
	  // Answer: The renderPage method is being called to render the page based on the current page state.
	  */}
      {renderPage()}
    </div>
  );
}
