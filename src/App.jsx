import React from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Project from "./components/projects/Project";

const App = () =>{
    return<>
        <Header/>
        <About/>
        <Experience/>
        <Project/>
        <Footer/>
    </>
}

export default App;