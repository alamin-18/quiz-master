import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 drop-shadow-lg lg:px-28">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-xl" to='topics'>daisyUI</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to='topics'>Topics</Link></li>
      <li><Link to='statistics'>Statistics</Link></li>
      <li><Link to='blog'>Blog</Link></li>
    </ul>
  </div>
</div>
        </div>
    );
};

export default Header;