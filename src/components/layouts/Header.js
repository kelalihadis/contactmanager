import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillHome, AiFillInstagram, AiFillLinkedin, AiFillPlusCircle, AiFillQuestionCircle } from 'react-icons/ai';
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = (props) => {
    const {heading} =props;
    return (
<nav className="navbar navbar-expand-sm navbar-dark 
bg-danger mb-3 py-0">
    <div className="container">
        <a href="/" className="navbar-brand">
       {heading}
        </a>
        <div>
       <ul className="navbar-nav mr-auto">
           <li className="nav-item">
          <Link to="/" className="nav-link">
            <AiFillHome size="1rem" className="mb-2"/>
              Home</Link>
           </li>

           <li className="nav-item">
          <Link to="/contact/add" className="nav-link">
          <AiFillPlusCircle size="1rem" className="mb-1"/> 
            Add</Link>
           </li>

           <li className="nav-item">
          <Link to="/about" className="nav-link">
          <AiFillQuestionCircle size="1rem" className="mb-1"/>
            About</Link>
           </li>  

       </ul>
        </div>
    </div>
</nav>
    )
}

Header.defaultProps =
{  heading: 'Default Heading'}
Header.propTypes={heading: PropTypes.string.isRequired}

export default Header;