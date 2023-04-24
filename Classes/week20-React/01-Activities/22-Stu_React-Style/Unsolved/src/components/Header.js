import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles = {
  heading: {
    background: '#880000',
    fontSize: '100px',
    color: 'white',
  },
};


function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header style={styles.heading} className="header">
      <h1 style={styles.heading}>Welcome</h1>
    </header>
  );
}

export default Header;
