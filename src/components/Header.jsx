import React from 'react';

const Header = () => {
  return (
    <div className='header'>
        <div>
            <img src="/logo.svg" alt="logo" />
        </div>
        <div>
            <ul className='list'>
                <li><a href="">Home</a></li>
                <li><a href="">Download</a></li>
                <li><a href="">App</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header;