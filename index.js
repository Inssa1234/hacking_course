// script.js
async function search() {
    const response = await fetch('/api/search?term=red leather shoes');
    const data = await response.json();
    console.log(data);
  };
search();