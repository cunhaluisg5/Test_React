import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Disciplines from "./pages/Search";
import Performence from "./pages/Performance";
import Report from "./pages/Report";
import Questionnaire from "./pages/Questionnaire";
import Answered from "./pages/Answered";
import About from "./pages/About";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/profile" element={<Profile/>}/>
                <Route exact path="/disciplines" element={<Disciplines/>}/>
                <Route exact path="/performance" element={<Performence/>}/>
                <Route exact path="/report" element={<Report/>}/>
                <Route exact path="/questionnaire" element={<Questionnaire/>}/>
                <Route exact path="/answered" element={<Answered/>}/>
                <Route exact path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;