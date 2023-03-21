import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// Answer: We are able to extract the key value pairs from props by using the destructuring assignment syntax.

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
		  // Answer: This is a ternary operator. It is checking if the current page state is equal to 'Home' and if it is, it will return the 'nav-link active' className. If it is not, it will return the 'nav-link' className.

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing
		  // Answer: This logic is checking if the current page state is equal to 'About' and if it is, it will return the 'nav-link active' className. If it is not, it will return the 'nav-link' className.

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          //  TODO: Add a comment explaining what this logic is doing
		  // Answer: This logic is checking if the current page state is equal to 'Blog' and if it is, it will return the 'nav-link active' className. If it is not, it will return the 'nav-link' className.

          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing
		  // Answer: This logic is checking if the current page state is equal to 'Contact' and if it is, it will return the 'nav-link active' className. If it is not, it will return the 'nav-link' className.

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
