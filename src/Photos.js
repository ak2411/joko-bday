import {Image, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const IMAGES = [require('./images/1.jpeg'), require('./images/2.jpeg'),
    require('./images/3.jpeg'),
    require('./images/4.jpeg'),
    require('./images/5.jpeg'),
    require('./images/6.jpeg'),
    require('./images/7.jpeg'),
    require('./images/8.jpeg'),
    require('./images/9.jpeg'),
    require('./images/10.jpeg'),
    require('./images/11.jpeg'),
    require('./images/12.jpeg'),
    require('./images/13.jpeg'),
    require('./images/14.jpeg'),
    require('./images/15.jpeg')
]

function Photos() {
    return (
        <div className="photos">
        {IMAGES.map(function(link) {
            return <div className="photos-content"><Image src={link} className="photo"/></div>;
        })}
        </div>
    );
  }
  
  export default Photos;