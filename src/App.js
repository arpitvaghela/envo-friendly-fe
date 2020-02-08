import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar'
import Card from './components/card'
import image from './images/image.jpg'

const menu = [{ name: 'A', linkpath: '/L1' }, { name: 'B', linkpath: '/L2' }]
const card = { image: image, e_index:5,price:120,aboutus:"This product is something"}
function App() {
  return (
    <>
    <Navbar />
    <main>
    <div className="cardlist">
      <Card card={card} />
      <Card card={card} />
      <Card card={card} />
      <Card card={card} />
      <Card card={card} />
      <Card card={card} />
      <Card card={card} />
      <Card card={card} />
      <Card card={card} />
      <Card card={card} />
      <Card card={card} />
      <Card card={card} />
      <Card card={card} />
    </div>
    </main>
    </>
  );
}

export default App;
