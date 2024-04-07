// GETリクエストを送信するURL
const url = 'http://localhost:3000/rsp/1';

// fetchを使ってGETリクエストを送信し、返された値をログに出力する関数
async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    console.log('Response:', responseData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// fetchData関数を呼び出す
fetchData();
