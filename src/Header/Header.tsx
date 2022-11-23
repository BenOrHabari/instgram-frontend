import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

function Header() {
  return <div id='Menu'>
    <nav>
      <ul className='navigation'>
        <li><Link to={`/feed`}>Feed</Link></li>
        <li><Link to={`/user`}>User</Link></li>
      </ul>
    </nav>
  </div>
}

export {Header}