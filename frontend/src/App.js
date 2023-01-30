import './App.css';
import Logout from './LoginComp/Logout';
import Home from './Component/Home';
import Login from './LoginComp/Login';
import Lending from './Component/Lending';
import NavgiationBar from './Component/NavgiationBar';
import Register from './LoginComp/Register';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
          <NavgiationBar />
          <Routes>
            <Route path="/" element={<Lending/>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            {/* <Route path="/" element={<Logout/>}/> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
