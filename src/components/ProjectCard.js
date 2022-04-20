import './ProjectCard.scss';

export default function ProjectCard({ title, url, imgSrc, excerpt }) {
  const href = 'https://' + url;
  const src = process.env.PUBLIC_URL + '/images/' + imgSrc;

  return (
    <a href={href} className='__project-card'>
      <div className='header'>
        <h3>{ title }</h3>
        <div className='url'>{ url }</div>
        <img src={src} />
      </div>
      <div className="excerpt">{ excerpt }</div>
    </a>
  )
}
