import {Image, Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cicididi from './images/cicididi.png';

function Message() {
    return (
        <div className="message">
        <div className="message-container">
                <div className="message-content">
                <Image src={cicididi} className="message-img"/>
                </div>                
                <div className="message-content text">To the sweetest dad in the world, thank you for:
believeing we can do whatever we set our mind to do
challenging us to do better
loving us nonetheless
having a soft spot for ur super cute si lucu si cantik daughters</div>
        </div>
    </div>
    );
  }
  
  export default Message;