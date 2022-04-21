import ProjectCard from '../components/ProjectCard';
import './Projects.scss';

const PROJECTS = [
  {
    title   : 'BTC2FIAT',
    url     : 'btc2fiat.me',
    imgSrc  : 'btc2fiat.png',
    excerpt : 'No-BS BTC to Fiat converter. Created for bitcoin enthusiasts and digital minimalists who value their privacy and time.',
  },

  {
    title   : 'Bitcoin Exact Forecast',
    url     : 'bitcoinexactforecast.com',
    imgSrc  : 'bitcoin_exact_forecast.png',
    excerpt : 'Exact price of bitcoin from 2012 to 2032. An ode to my addiction to checking the spot price of bitcoin.',
  },

  // {
  //   title   :
  //   url     :
  //   excerpt :
  // }
];

export default function Projects() {
  return (
    <div id='projects'>
      <h2>My Projects</h2>
      <div className='content'>
        { PROJECTS.map(project => (
          <ProjectCard key={project.url} title={project.title} url={project.url} excerpt={project.excerpt} imgSrc={project.imgSrc} />
        ))}
      </div>
    </div>
  );
}