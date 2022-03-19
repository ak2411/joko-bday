import {Image, Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cicididi from './images/cicididi.png';

function Message() {
    return (
        <div className="message">
        <div className="message-container">
            <div className="message-content image">
                <Image src={cicididi} className="message-img"/>
             </div>                
            <div className="message-content text">To the sweetest dad in the world, thank you for: 
                <br /><br/>
                1. Believing we can do whatever we set our minds to <br/>
                2. Always challenging us to do and be better <br/>
                3. Being our number one supporter <br/>
                4. Being the best role model we could ever ask for <br/>
                5. Always being there for us <br/>
                6. Always letting us know how much you love us (We love you too) <br/>
                <br/><br/>
                We are forever grateful that you are our dad. From the moment we had our first breath till now, there has never been a single moment when you were not there. You are always selfless. You are always dependable. You are always caring. You are always putting the family first. You are always there. You are our rock. We love you so much and are so grateful for everything you do. <br/> 
                <br/><br/><br/>

                Happiest birthday Daddy! We love and miss you. 
                <br/><br/><br/>

                Cici and Didi
            </div>
        </div>
    </div>
    );
  }
  
  export default Message;