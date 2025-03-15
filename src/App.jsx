import React from 'react';
import './App.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './Home'
import Layout from './Layout';
import { LanguageProvider } from './LanguageContext';

function App() {

  return (
    <LanguageProvider>
    <Router>
      <Layout>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      </Layout>
    </Router>
    </LanguageProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

export default App
