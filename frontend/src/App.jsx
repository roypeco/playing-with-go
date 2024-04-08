import React, { useState, useEffect } from 'react';

const App = () => {
  const [responseData, setResponseData] = useState(null);
  const [playerHandImg, setPlayerHandImg] = useState(null);
  const [cpuHandImg, setCpuHandImg] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/rsp/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setResponseData(data.Message);
        switch (data.Playerhand){
          case 1:
            setPlayerHandImg('images/rock.png');
            break;
          case 2:
            setPlayerHandImg('images/scissors.png');
            break;
          default:
            setPlayerHandImg('images/paper.png');
        }
        switch (data.Cpuhand){
          case 1:
            setCpuHandImg('images/rock.png');
            break;
          case 2:
            setCpuHandImg('images/scissors.png');
            break;
          default:
            setCpuHandImg('images/paper.png');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>RSP</h1>
      {playerHandImg ? (
        <img src={playerHandImg} className="playerHandImg" alt="handImg" />
      ) : (
        <p>No Image</p>
      )}
      {cpuHandImg ? (
        <img src={cpuHandImg} className="cpuHandImg" alt="handImg" />
      ) : (
        <p>No Image</p>
      )}
      {responseData ? (
        <pre>{responseData}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
