import React, { useEffect, useState }  from "react"
import Context from './Context.js'
import ProductBox from "./Components/ProductBox.js";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

async function getProducts() {
  let res = await fetch("http://52.26.193.201:3000/products/list");
  let data = await res.json();
  return data;
}

function App() {
  const [state, setState] = useState([])

  useEffect(() => {
    let mounted = true;
    getProducts()
      .then(items => {
        if(mounted) {
          setState(items)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <Context.Provider value={state}>
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
              <img src={logo} className="App-logo" alt="logo" />
              <div className="navbar-brand">React Brand Products</div>
            </div>
          </nav>
        </header>
        <ProductBox />
      </div>

    </Context.Provider > 

  );
}

export default App;
