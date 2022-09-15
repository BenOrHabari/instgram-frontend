import React from 'react';
import './App.css';
import { Link, Outlet } from "react-router-dom";

async function getJson(url: string) {
  const res = await fetch(url);
  return res.json();
};

function App() {
  return <div>
    Hello
    <nav>
      <ul>
        <li><Link to={`/feed`}>Feed</Link></li>
        <li><Link to={`/user`}>User</Link></li>
        <li><Link to={`/post/123`}>Post</Link></li>
      </ul>
    </nav>
    <Outlet></Outlet>
  </div>;
}



export default App;
