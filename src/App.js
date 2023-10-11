import './plugins/icofont/icofont.min.css'
import './plugins/bootstrap/css/bootstrap.min.css'
import './css/style.css'
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
import Blogs from "./pages/Blog";
import About from "./pages/About";
import LayoutDrop from "./pages/LayoutDrop";
import Departement from "./pages/Departement";
import DepartementSingle from "./pages/DepartementSingle";
import Services from "./pages/Services";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="service" element={<Services/>}/>
                        <Route path="blog" element={<Blogs/>}/>
                        <Route path="contact" element={<Contact/>}/>
                        <Route path="services" element={<Home/>}/>
                        <Route path="*" element={<NoPage/>}/>
                    </Route>

                    <Route path="/Departement" element={<LayoutDrop/>}>
                        <Route index element={<Departement/>}/>
                        <Route path="departement-single" element={<DepartementSingle/>}/>
                    </Route>

                </Routes>


            </BrowserRouter>
        </>
    );
}

export default App;
