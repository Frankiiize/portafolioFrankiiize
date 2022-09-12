import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


const navigation = [
  { name: 'Francisco Jimenez', href: '/register', current: false },
  { name: '_hello', href: '/', current: false },
  { name: '_about-me', href: '/aboutme', current: false },
  { name: '_projects', href: '/#', current: false },
  { name: '_contact-me', href: '/#', current: false },
]


const Header = () => {
  const location = useLocation();
  const [ showMenu , setShowMenu ] = useState(false);
  console.log(location.pathname  )

  return (
    <header className="headerContainer">
     <div className="headerContainer__heading">
      <ul className="headerContainer__heading-logo">
        {
          navigation.slice(0,1).map((item,index) => (
            <li
            key={`link-${item.name}`}
            >
              <Link to={item.href}>{item.name}</Link>
            </li>
          ))
        }
      </ul>
      <ul className="headerContainer__heading-deskMenu">
        {
          navigation.slice(1).map((item,index) => (
            <li
            key={`link-${item.name}`}
            className={location.pathname === item.href ? 'current' : undefined} 
            >
              <Link  
              to={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))
        }
      </ul>
      <button
        onClick={() => setShowMenu(!showMenu)}
        type="button"
        >
        <div></div>
        <div></div>
        <div></div>
      </button>
     </div>
     <div className="headerContainer__list">
      {
        !!showMenu && (
          <ul>
          {
            navigation.slice(1).map((item,index) => (
              <li
              className={location.pathname === item.href ? 'current' : undefined} 
              >
                <Link to={item.href}>{item.name}</Link>
              </li>
            ))
          }
          </ul>
        )
      }
     </div>
    </header>
  );
}

export { Header };