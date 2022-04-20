import './Contact.scss';

const SERVICES = [
  { id: "Github",  handle: "handsomelatino", url: "https://github.com/handsomelatino" },
  { id: "Email",   handle: <>this.<span className='super'>super</span>handsome.latino@proton.me</> },
  { id: "Reddit",  handle: "handsome_latino", url: "https://www.reddit.com/user/handsome_latino"},
  { id: "Twitter", handle: "@handsomelatino", url: 'https://twitter.com/handsome_latino' },
]

export default function Contact() {
  return (
    <div id='contact'>
      <h2>Contact</h2>

      <div className='content'>
        <div>
          { SERVICES.map(service => (
            <div key={service.id} className='service'>
              <div className='name'>{ service.id }</div>
              <div className='url'><a href={service.url}>{ service.handle }</a></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
