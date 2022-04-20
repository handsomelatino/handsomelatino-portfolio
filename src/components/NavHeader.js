import { NavLink } from "react-router-dom";

import './NavHeader.scss';

const LINKS = [
  { to: '/',         phrase: 'Home', id: '#about-me' },
  { to: '/projects', phrase: 'Projects', id: "#projects" },
  { to: '/blog',     phrase: 'Blog' },
  { to: '/contact',  phrase: 'Contact' },
]
export default function NavHeader() {

  // const smoothScrollTo = (e, id) => {
  //   const element = document.getElementById(id);
  //   element.scrollTo({ behavior: 'smooth' });
  //   console.log('element:', element);
  //   element
  // }

  return (
    <div className="__nav-header">
      {/* { LINKS.map(link => <NavLink to={link.to}>{ link.phrase }</NavLink>) } */}
      { LINKS.map(link => <a href={link.id}>{ link.phrase }</a>) }
    </div>
  );
}
