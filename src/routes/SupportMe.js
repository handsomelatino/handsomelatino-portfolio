import LinkButton from '../components/LinkButton';
import './SupportMe.scss';

export default function SupportMe() {
  return (
    <div id='support-me'>
      <h2>Support Me</h2>

      <div className='content'>
        <p>Your support can help me create more projects that bring awareness to the strengths of Bitcoin amidst a noisy and distracted world.</p>
        <p>My goal is to add a small contribution to a world where my children, our children can see a brighter future using Bitcoin as a censorship-resistant and decentralized type of money.</p>
        <p className='donate-button'><LinkButton to="https://pay.handsomelatino.com/invoice?id=T95yLnYYGCbPLGJCdNutip">Donate Bitcoin</LinkButton></p>
      </div>
    </div>
  )
}
