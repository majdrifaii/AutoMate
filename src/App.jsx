import React from 'react';
import './App.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './Home'
import Layout from './Layout';
import { LanguageProvider } from './LanguageContext';
import Service from './Service';
import NotFound from './NotFound';
import Blogs from './Blogs';
import Blog from './Blog';

function App() {

  return (
    <LanguageProvider>
    <Router>
      <Layout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='service/:name/:id' element={<Service />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='blogs/:id' element={<Blog />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      </Layout>
    </Router>
    </LanguageProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

export default App
