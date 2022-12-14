import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';
import Body from './components/Body';
import Error404 from './components/Error404';
import Home from './components/home';



function App() {
  return (
    <div className='container-fluid'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/productos"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Body/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
