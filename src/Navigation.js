import './Navigation.css';
//import Presentation from './Presentation';
//import Projects from './Projects';
//import CV from './CV';

function Navigation() {
  return (
    <div className="Navigation">
      <p><a href="Presentation">Présentation</a></p>
      <p><a href="./Projects">Projets</a></p>
      <p><a href="./CV">CV</a></p>
    </div>
  );
}

export default Navigation;