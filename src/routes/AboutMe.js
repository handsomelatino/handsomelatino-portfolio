import LinkButton from '../components/LinkButton';
import NavHeader from '../components/NavHeader';
import './AboutMe.scss';

export default function AboutMe() {
  return (
    <>
    <div className='__about-me'>
      <NavHeader />
      
      <div>
        <p>Hi, I’m</p>
        <h1>Handsome <strong>Latino</strong></h1>
        <p className='bottom'><em>I used to be handsome...</em></p>
      </div>

      <LinkButton to='#what-happened'>What Happened →</LinkButton>
    </div>
    </>
  );
}
