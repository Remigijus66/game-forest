import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Item = ({ item, assets, setAssets }) => {

  const nav = useNavigate()

  const navigate = () => {
    nav("/item/" + item.id)
  }

  const handleBuy = () => {
    if (assets.money < item.price) return;
    const assetsCopy = { ...assets }
    assetsCopy.money = assets.money - item.price
    if (item.name === 'Land') { assetsCopy.land = assets.land + 1 }
    if (item.name === 'Water') { assetsCopy.water = assets.water + 1 }
    if (item.name === 'Seeds') { assetsCopy.seeds = assets.seeds + 1 }
    setAssets(assetsCopy)

    // console.log(assets.key)
    // console.log(key)

  }

  return (

    <div className="card with-link" onClick={handleBuy}>
      {/* <img className='input-image' src={item.image} alt="" />  */}
      <h2>Buy</h2>
      <h3>{item.name}</h3>
      <h5>Price {item.price}</h5>
      <p style={{ fontSize: '10px' }}> {item.info}</p>
    </div>


  );
};

export default Item;