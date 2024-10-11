
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Ragister from './component/Ragister';
import Login from './component/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes >
    <Route path="/login" element={<Login />} >
    </Route>
    <Route path="/ragister" element={<Ragister />} >
    </Route>
    <Route path="/" element={<Home />} >
    </Route>
    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
