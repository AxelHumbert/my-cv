import './Header.css';
import cv from './images/cv.JPG';

function Header() {
  return (
    <div className="header">
      <h1>
        Axel HUMBERT
      </h1>
      <img src={cv} alt="Photo d'Axel HUMBERT" id="photo_axel"/>
    </div>
  )
}

export default Header;