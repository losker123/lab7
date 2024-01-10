import React from 'react';
import '../styles/Header.css'
import MainPage  from '../pages/MainPage';
import Installations  from '../pages/Installations';
import Questions  from '../pages/Questions';
import Systems  from '../pages/Systems';
import User from '../pages/UserPage';
import Partners from '../pages/Partners';
import Reviews from '../pages/Reviews'
import { BrowserRouter as Router,Link, Route, Routes } from 'react-router-dom';


const Header=()=>{
    return(
       <>
       <Router>
        <div className="header-container">
            <Link to="/">
            <h1 className="header-title">IsakSystem</h1> 
            </Link>
        
        <ul className="nav-list">
            <li>
                <Link to="/Reviews">Отзывы</Link>
            </li>
             <li>
                <Link to="/Partners">Партнеры и Сертификаты</Link>
            </li>
            <li>
                <Link to="/Installations">Установки и обслуживания</Link>
            </li>
            <li>
                <Link to="/Questions">Часто задаваемые вопросы</Link>
            </li>
            <li>
                <Link to="/Systems">Системы</Link>
            </li>
            <li>
                <Link to="/User">Профиль</Link>
            </li>

        </ul>
        </div>
        <Routes>
           <Route path="/" element={<MainPage />} />
           <Route path="/Reviews" element={<Reviews />} />
           <Route path="/Partners" element={<Partners />} /> }
           <Route path="/Installations" element={<Installations />} />
           <Route path="/Questions" element={<Questions />} /> 
           <Route path="/Systems" element={<Systems />} />
           <Route path="/User" element={<User />} />
        </Routes>
       </Router>
        
       </> 
    )
}
export default Header;

