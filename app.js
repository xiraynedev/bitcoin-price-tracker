(function(resource) {
  const h1 = document.querySelector('h1');

  document.querySelector('.btn').addEventListener('click', function() {
    h1.textContent = 'The current price of bitcoin is $';
    getData(resource).then(data => {
      h1.textContent += data;
    })
  
  });
  
    const getData = async resource => {
      const response = await fetch(resource);
      const data = await response.json();
      return data.bpi.USD.rate;
    }
})('https://api.coindesk.com/v1/bpi/currentprice.json');

