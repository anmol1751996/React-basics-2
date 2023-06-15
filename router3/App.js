import './App.css';
import {BrowserRouter, Routes,Route,} from 'react-router-dom';
import Home from './coomponent/Home'
import About from './coomponent/About'
import Navbar from './coomponent/Navbar'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      
      <Routes>

      <Route path="/"element={<Home />}  />
      <Route path="/about"element={<About />}  />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;