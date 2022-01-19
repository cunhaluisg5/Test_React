import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Disciplines from "./pages/Search/disciplines";
import Performence from "./pages/Performance";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/profile" element={<Profile/>}/>
                <Route exact path="/disciplines" element={<Disciplines/>}/>
                <Route exact path="/performance" element={<Performence/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;