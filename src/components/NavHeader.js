import './NavHeader.scss';

const LINKS = [
  { to: '/projects', phrase: 'Projects', id: "#projects" },
  { to: '/contact',  phrase: 'Contact',  id: "#contact" },
  // { to: '/blog',     phrase: 'Blog' },
]
export default function NavHeader() {

  return (
    <div className="__nav-header">
      { LINKS.map(link => <a href={link.id}>{ link.phrase }</a>) }
    </div>
  );
}
