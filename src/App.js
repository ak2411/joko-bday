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
        <Route path="message" element={<Message/>} />
        <Route path="photos" element={<Photos/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
   </BrowserRouter>
  )
}

export default App;
