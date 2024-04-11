import React, { useState } from 'react';

const FetchData = async (handInt) => {
  let playerHandImg = ''
  let cpuHandImg = ''
  let data
  try {
    const response = await fetch(`http://localhost:3000/rsp/${handInt}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    data = await response.json();
    switch (data.Playerhand){
      case 1:
        playerHandImg = 'images/rock.png';
        break;
      case 2:
        playerHandImg = 'images/scissors.png';
        break;
      default:
        playerHandImg = 'images/paper.png';
    }
    switch (data.Cpuhand){
      case 1:
        cpuHandImg = 'images/rock.png';
        break;
      case 2:
        cpuHandImg = 'images/scissors.png';
        break;
      default:
        cpuHandImg = 'images/paper.png';
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  return [data.Message, playerHandImg, cpuHandImg]
};

const App = () => {
  const [responseData, setResponseData] = useState(null);
  const [playerHandImg, setPlayerHandImg] = useState(null);
  const [cpuHandImg, setCpuHandImg] = useState(null);

  const fetchDataOnClick = async (handInt) => {
    const ary = await FetchData(handInt);
    setResponseData(ary[0]);
    setPlayerHandImg(ary[1]);
    setCpuHandImg(ary[2]);
  };

  return (
    <div>
      <h1>Rex RSP</h1>
      <button className="rspbutton" onClick={() => fetchDataOnClick(1)}>Rock</button>
      <button className="rspbutton" onClick={() => fetchDataOnClick(2)}>Scissors</button>
      <button className="rspbutton" onClick={() => fetchDataOnClick(3)}>Paper</button>
      {playerHandImg && (
        <img src={playerHandImg} className="playerHandImg" alt="handImg" />
      )}
      {cpuHandImg && (
        <img src={cpuHandImg} className="cpuHandImg" alt="handImg" />
      )}
      {responseData && (
        <pre>{responseData}</pre>
      )}
    </div>
  );
};

export default App;
