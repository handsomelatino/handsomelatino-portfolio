import { Link } from "react-router-dom";

import './LinkButton.scss';

export default function LinkButton({ to, children }) {

  const handleClick = e => {

    if (to.startsWith('#')) {
      e.preventDefault();
      const anchor = document.getElementById(to.slice(1));
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <a className='__link-button' href={to} onClick={handleClick}>
      { children }
    </a>
  )
}