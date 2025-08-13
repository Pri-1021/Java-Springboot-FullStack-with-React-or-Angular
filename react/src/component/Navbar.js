import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="navbar-brand">Product Management System</div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/addProduct" className="navbar-link">Add Product</Link>
      </div>
    </nav>
  );
};

export default Navbar;
