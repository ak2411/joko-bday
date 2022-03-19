import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Message from './Message';
import Photos from './Photos';
import { HashRouter, Routes ,Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/message" exact element={<Message/>} />
        <Route path="/photos" exact element={<Photos/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
   </>
  )
}

export default App;
