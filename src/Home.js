import {Image, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import hero from './images/hero.png';

function Home() {
    return (
        <div className="home">
            <Image className="hero-img" src={hero}/>
            <div className="hero-text"><h1>Happy Birthday Daddy</h1></div>
        </div>
    );
  }
  
  export default Home;