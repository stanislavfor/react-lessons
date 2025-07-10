import logo from './logo.svg';
import './App.css';
import React from "react";
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="App-link">Edit <code>src/App.js</code> and save to reload. </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        </header>
        <div className="container">
            <h1>Каталог товаров</h1>
            <AddProductForm />
            <ProductList />

        </div>
      <footer className="App-footer">
        <p className="App-link">react js lesson, fullstack and web development</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-link">web-application, moscow, 2025 © copyright</p>
      </footer>
    </div>
  );
}

export default App;
