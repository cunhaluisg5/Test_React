import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Disciplines from "./pages/Search";
import Performence from "./pages/Performance";
import Report from "./pages/Report";

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
            </Routes>
        </BrowserRouter>
    );
};

export default Router;