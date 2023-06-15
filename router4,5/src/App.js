import './App.css';
import {BrowserRouter, Routes,Route,} from 'react-router-dom';
import Home from './coomponent/Home'
import About from './coomponent/About'
import Navbar from './coomponent/Navbar'
import Page404 from './coomponent/Page404'
import Profile from './coomponent/Profile'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      
      <Routes>
       <Route path="/"element={<Home />}  />
      <Route path="/about"element={<About />}  />
      <Route path="/Profile"element={<Profile />}  />
      <Route path="/*"element={<Page404 />}  />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;