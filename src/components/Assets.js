import React from 'react';
import { Link } from "react-router-dom";

const Assets = ({ assets }) => {
  return (

    <div className='header d-flex f-wrap green'>
      <h3 style={{ marginRight: '10px' }}>Player assets: </h3>
      <div>
        <h4>Land: {assets.land} . Seeds: {assets.seeds} .
          Water: {assets.water} .
          Money: {assets.money} .
          Trees: {assets.trees}</h4>


      </div>


    </div>
  );
};

export default Assets;