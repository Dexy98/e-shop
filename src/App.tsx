import React from 'react';
import './App.css';
//router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Carrello from './components/Carrello';
import DetailProduct from './components/DetailProduct';
import Header from './components/Header';
//react notifica
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App: React.FC = () => {


  return (
    <Router>
      <div>
        <Header />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route path="/e-shop/" element={<Home />} />
          <Route path="/e-shop/carrello" element={<Carrello />} />
          <Route
            path="/e-shop/detail/:id"
            element={<DetailProduct />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
