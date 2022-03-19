import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Message from './Message';
import Photos from './Photos';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/message"} element={<Message/>} />
        <Route path={process.env.PUBLIC_URL + "/photos"} element={<Photos/>} />
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home/>} />
      </Routes>
   </BrowserRouter>
  )
}

export default App;
