import logo from "./logo.svg";
import "./App.css";
import { Router,useRoutes, BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./component/Index";
import Contact from "./component/Contact";
import Message from "./component/Message";
import Nav from "./component/Nav";


function App() {
  return (
    <BrowserRouter>
    <Nav/>

    <Routes>
    <Route path="/" element={<Nav />} />
    <Route path="/index" element={<Index />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/message" element={<Message />} />
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
