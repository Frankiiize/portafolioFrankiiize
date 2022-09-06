import React from "react";
import { Link, useLocation } from "react-router-dom";


const navigation = [
  { name: 'Francisco Jimenez', href: '/register', current: false },
  { name: '_hello', href: '/', current: false },
  { name: '_about-me', href: '/#', current: false },
  { name: '_projects', href: '/#', current: false },
  { name: '_contact-me', href: '/#', current: false },
]


const Header = () => {
  const location = useLocation();
  console.log(location.pathname)

  return (
    <header className="headerContainer">
      <nav className="headerContainer__nav">
        <ul className="headerContainer__nav__list">
          {navigation.map((item,index) => (
            <li
            key={`link-${item.name}-{item.index}`}
            className={location.pathname === item.href ? 'current' : undefined} 
            >
              <Link 
                to={item.href}
                >
                  {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export { Header };