import React, { useState, useEffect } from 'react';

const App = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/rsp/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setResponseData(data.Message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // return (
  //   <div>
  //     <h1>Response Data:</h1>
  //     {responseData ? (
  //       <pre>{JSON.stringify(responseData, null, 2)}</pre>
  //     ) : (
  //       <p>Loading...</p>
  //     )}
  //   </div>
  // );
  return (
    <div>
      <h1>APIからのメッセージ:</h1>
      <p>{responseData}</p>
    </div>
  );
};

export default App;
