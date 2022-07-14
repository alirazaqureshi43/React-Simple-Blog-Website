import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import React from "react";
import ArticlePage from "./pages/ArticlePage";
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element = {<Home/>}/>
    <Route path="/About" element = {<About/>}/>
       <Route path="/Contact" element = {<Contact/>}/>
    <Route path="/ArticlePage/:id" element = {
    <ArticlePage/>
    }/>
    </Routes>
    </Router>
  )
}

export default App;
