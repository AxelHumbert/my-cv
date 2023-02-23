import './Footer.css';
import facebook from './images/facebook.jpeg';
import instagram from './images/instagram.jpeg';
import linkedin from './images/linkedin.jpeg';

function Footer () {
  return (
    <div className="Footer">
      <div>
        <p>Copyright</p>
      </div>
      <div>
        <p><a href="">Contact par mail</a></p>
      </div>
      <div>
        <ul>
          <li>
            <a href="https://www.facebook.com/people/Axel-Humbert/100085197099108/"><img src={facebook} alt="Logo Facebook" /></a>
          </li>
          <li>
            <a href="https://www.instagram.com/axelhumbertpro/"><img src={instagram} alt="Logo Instagram" /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/axel-humbert-ing%C3%A9nieurs2000/"><img src={linkedin} alt="Logo Linkedin" /></a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;