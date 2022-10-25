import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


const Forest = ({ forest, index, assets, setAssets, forests, setForests }) => {

  const [seconds, setSeconds] = useState(0)
  const [timer, setTimer] = useState(false);
  const [progres, setProgres] = useState(0)

  useEffect(() => {
    if (seconds === 0) {
      setTimer(false);
      setSeconds(20);
      return;
    }
    if (timer) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
        setProgres((21 - seconds) * 100 / 20)
        clearTimeout(timer);
      }, 1000)
    }
    // console.log('seconds', seconds)
    // console.log('progress', progres)
  }, [seconds, timer]);


  const countTime = () => {
    console.log('time', timer);
    setTimer(true)
  }

  const [ready, setReady] = useState(false)

  const addSeeds = () => {
    if (forests[index].seeds > 19) { return }
    if (assets.seeds > 0) {
      const assetsCopy = { ...assets }
      assetsCopy.seeds = assets.seeds - 1
      setAssets(assetsCopy)
    } else { return }
    const forestsCopy = { ...forests }
    forestsCopy[index].seeds = forests[index].seeds + 1
    // setForests(forestsCopy)
    console.log('forests', forests)
  }
  const addWater = () => {
    if (forests[index].water > 0) { return }
    if (assets.water > 0) {
      const assetsCopy = { ...assets }
      assetsCopy.water = assets.water - 1
      setAssets(assetsCopy)
    } else { return }
    const forestsCopy = { ...forests }
    forestsCopy[index].water = forests[index].water + 1
    // setForests(forestsCopy)
    console.log('forests', forests)
  }
  const grow = async () => {
    countTime()
    function timeout(delay) {
      return new Promise(res => setTimeout(res, delay));
    }
    await timeout(20000)
    console.log('time')
    const forestsCopy = { ...forests }
    // forests[index].trees = forests[index].seeds

    forestsCopy[index].trees = forests[index].seeds
    forestsCopy[index].seeds = 0;
    forestsCopy[index].water = 0;
    // setForests(forestsCopy)
    console.log('forests', forests)
    setReady(true)

  }
  const harvest = () => {
    const forestsCopy = { ...forests }
    // forests[index].trees = forests[index].seeds
    const assetsCopy = { ...assets }
    assetsCopy.trees = assetsCopy.trees + forests[index].trees
    setAssets(assetsCopy)
    forestsCopy[index].trees = 0

  }

  return (

    <div className="forest" >
      {/* <img className='input-image' src={item.image} alt="" />  */}
      <h2>Forest - {index + 1}</h2>


      <div>Seeds: {forest.seeds} <button onClick={addSeeds}>Add Seeds</button></div>
      <div>Water: {forest.water} <button onClick={addWater}>Add Water</button></div>
      {(forest.seeds > 0 && forest.water > 0) && <button className='btn' onClick={grow}> Let the forest grow </button>}
      {timer && <div className='timer-container'> <div className='timer-counter' style={{ width: progres + '%' }}> </div></div>}
      {ready && <div> Ready </div>}
      <div>Trees: {forest.trees} {forest.trees > 0 && <button onClick={harvest}>Harvest</button>}</div>


      {/* <h3>{item.name}</h3>
      <h5>Price {item.price}</h5>
      <p style={{ fontSize: '10px' }}> {item.info}</p> */}

    </div>


  );
};

export default Forest;