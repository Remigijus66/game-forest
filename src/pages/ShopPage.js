import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import Item from '../components/Item';

const ShopPage = ({ assets, setAssets }) => {
  const [items, setItems] = useState([])
  const forsale = [{ name: 'Land', price: 10, info: 'Piece of land suitable for 20 trees' },
  { name: "Water", price: 3, info: 'Water sufficient for 20 trees to grow' },
  { name: 'Seeds', price: 1, info: 'One seed = one tree' }]

  useEffect(() => setItems(forsale), [])


  return (
    <div >
      <h1>Shop</h1>
      <div >
        <h1>Items for sale</h1>
        <div className="d-flex f-wrap">
          {items.map((x, i) => <Item assets={assets} setAssets={setAssets} key={i} item={x} />)}
        </div>

      </div >
    </div>

  );
};




export default ShopPage