import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu';
import HomePage from './Components/HomePage';
import Contact from './Components/Contact';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Mainpage from './Components/Mainpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Mainpage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/Menu' element={<Menu/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
