import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <h1>Navbar</h1>
      <ul>
         <Link to='/contact'><li>Contact</li></Link> 
         <Link to='/message'><li>Message</li></Link> 
         <Link to='/index'><li>Index</li></Link> 
      </ul>
    </div>
  );
}

export default Nav;
