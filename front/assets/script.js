window.onload = () => {
  const buttonSortFib = document.getElementById('js-buttonSortFib');
  const buttonSortBuble = document.getElementById('js-buttonSortBuble');

  buttonSortBuble.onclick = e => {
    const userInput = document.getElementById('numbers').value;
    sendSortRequest('bubble', userInput);
    
  }

  buttonSortFib.onclick = e => {
    const userInput = document.getElementById('numbers').value;
    sendSortRequest('fib', userInput);
  }

  function setResultScore(score) {
    document.getElementById('js-resultScore').innerText = score + ' seconds';
    document.getElementById('js-result').classList.add('-visible');
  }

  function sendSortRequest(type, data) {
    const score = type === 'bubble' ? 24 : 35;
    setResultScore(score);
  }

  async function postData(
      url = '', 
      data = {}
    ) {
    
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response;
  }

  postData('http://127.0.0.1:5000/sortBubble', {"array": [1, 3, 5]})
    .then((response) => {
      console.log(response); // JSON data parsed by `response.json()` call
    });
}

