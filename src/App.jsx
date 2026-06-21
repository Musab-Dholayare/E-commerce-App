import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import ProductDet from './Pages/ProductDet';
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="ProductDetail/:id" element={<ProductDet />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
