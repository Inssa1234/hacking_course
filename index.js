// Appelle ton API sécurisée (fichier Node dans api/)
async function search() {
    const response = await fetch('/api/search?term=red leather shoes');
    const data = await response.json();
    console.log(data);
  };
search();