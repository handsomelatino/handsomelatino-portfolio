import LinkButton from '../components/LinkButton';
import './SupportMe.scss';

export default function SupportMe() {
  return (
    <div id='support-me'>
      <h2>Support Me</h2>

      <div className='content'>
        <p>Your support can help me create more projects that bring awareness to the strengths of Bitcoin amidst a noisy and distracted world.</p>
        <p>My goal is to add a small contribution to a world where my children, our children can see a brighter future using Bitcoin as a censorship-resistant and decentralized type of money.</p>
        <p className='donate-button'><LinkButton to="https://pay.handsomelatino.com/api/v1/invoices?storeId=3zecRWVXGTMtpsE4157U8hjzL9iwBfPFBroABh3oWD3r&currency=USD">Donate Bitcoin</LinkButton></p>
        <p>Tipping with lightning? Use Lightning Address: <code>handsome_latino@stacker.news</code></p>
        <p className='lnurl-button'><LinkButton to='lightning:lnurl1dp68gurn8ghj7um5v93kketj9ehx2amn9uh8wetvdskkkmn0wahz7mrww4excup0dpskuerndakk2hmvv96xjmn02f3vg9'>⚡️ handsome_latino@stacker.news</LinkButton></p>
      </div>
    </div>
  );
}
