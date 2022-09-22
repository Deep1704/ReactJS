import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import Layout from './components/Layout';
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';
import Faculty from './components/Faculty';
import Api from './components/Api';
import Detail from './components/Detail';
import Addstudent from './components/Addstudent';
import Editstudent from './components/Editstudent';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
       <Route index element={<Home />}></Route>
       <Route path="Contact" element={<Contact />}></Route>
       <Route path="About" element={<About />}></Route>
       <Route path="Faculty" element={<Faculty />}></Route>
       <Route path="Api" element={<Api />}></Route>
       <Route path="/Api/:id" element={<Detail />} />
       <Route path="/Api/add" element={<Addstudent />} />
      <Route path="/Detail/:id" element={<Detail/>} />
      <Route path="/Api/edit/:id" element={<Editstudent/>}/>
      </Route>  
    </Routes>
  </BrowserRouter>  
);



