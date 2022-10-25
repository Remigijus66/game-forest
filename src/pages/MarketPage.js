import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

const MarketPage = ({ assets, setAssets }) => {

  const [price, setPrice] = useState(0)
  const [trade, setTrade] = useState(false)

  const randomPrice = () => { return Math.floor(Math.random() * 5) + 1; }

  const sellTree = () => {
    if (assets.trees < 1) return
    const assetsCopy = { ...assets };
    assetsCopy.trees = assets.trees - 1;
    assetsCopy.money = assetsCopy.money + price;
    setAssets(assetsCopy)
    trade ? setTrade(false) : setTrade(true)
  }
  useEffect(() => setPrice(randomPrice()), [trade]);
  return (
    <div >
      <h1>Timber market</h1>
      <h2> Current price: {price} </h2>
      <button className='btn' onClick={sellTree}>Sell</button>
    </div>

  );
};




export default MarketPage