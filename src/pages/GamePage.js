import { waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import Forest from '../components/Forest';

const GamePage = ({ forests, setForests, assets, setAssets, forest, setForest }) => {



  const makeForest = () => {
    if (assets.land > 0) {
      const assetsCopy = { ...assets }
      assetsCopy.land = assets.land - 1
      setAssets(assetsCopy)
    } else { return }
    const initialForest = {
      seeds: 0,
      water: 0,
      trees: 0
    }
    setForest(initialForest)
    console.log('forest ===', forest);

    setForests([...forests, initialForest])

  }



  return (
    <div >
      <h1>Forests</h1>
      <div >
        <button onClick={makeForest}>Set Forest</button>
        <div className="d-flex f-wrap">
          {forests.map((x, i) => <Forest assets={assets} setAssets={setAssets} key={i} index={i} forest={x} setForests={setForests} forests={forests} />)}
        </div>

      </div >
    </div >

  );
};




export default GamePage