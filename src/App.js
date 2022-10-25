import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toolbar from './components/Toolbar';
import ShopPage from './pages/ShopPage';
import GamePage from './pages/GamePage';
import MarketPage from './pages/MarketPage';
import { useState } from 'react';
import Assets from './components/Assets';

function App() {
  const [assets, setAssets] = useState({
    land: 0,
    seeds: 0,
    water: 0,
    money: 40,
    trees: 0
  })
  const [forests, setForests] = useState([])
  const [forest, setForest] = useState({})
  return (
    <div className="App">


      {/* // shop - where user buys items, seeds, water, land
// game - where user plants and harvest trees
// market - where user sells his wood, and collected trees */}
      <BrowserRouter>

        <Toolbar />
        <Assets assets={assets} />

        <Routes>
          <Route path="/shop" element={<ShopPage assets={assets} setAssets={setAssets} />} />

          <Route path="/game" element={<GamePage forests={forests} setForests={setForests} assets={assets} setAssets={setAssets} forest={forest} setForest={setForest} />} />

          <Route path="/market" element={<MarketPage assets={assets} setAssets={setAssets} />} />
          {/* <Route path="/checkout/" element={<CheckoutPage />} /> */}


        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
