
async function requestAPI(url, method, body) {
  try {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/${url}`, {
      method: `${method}`,
      credentials: 'include',
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        //'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
      },
    });
    const dataParsed = await res.json();
    return dataParsed;
  } catch (err) {
    return 'error';
  }
}

export async function requestAPIwFiles(url, method, body) {
  try {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/${url}`, {
      method: `${method}`,
      credentials: 'include',
      body: body,
      headers: {
        Accept: '*/*',
        'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
      },
    });
    const dataParsed = await res.json();
    return dataParsed;
  } catch (err) {
    return 'error';
  }
}



export default requestAPI;
