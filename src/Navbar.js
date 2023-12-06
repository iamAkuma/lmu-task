import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <a className="brand-link" href='/#'>BookYourShow</a>
      </div>
      <div className="navbar-center">
        <a href="/#">Home</a>
        <a href="/#">Movies</a>
      </div>
      <div className="navbar-right">
        <a href='/#'>Login</a>
        <div className="red-box">
          <a href="/#">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
