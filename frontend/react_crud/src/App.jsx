import React from "react";
import Nav from "./Nav/Nav";
import Login from "./Auth/Login";
import Blog from "./Blog/Blog";
import View from "./BlogView/View";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <>
        <Nav />
        <div className="bg-white">
            <Routes>
                <Route path="/" element={<Blog />} />
                <Route path="/view/:id" element={<View />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
        </>
    )
}

export default App;