const coinForm = document.getElementById('coin-form');
const coinArea = new FormData(coinForm);
let amount = data.get('amount');
let coinName = data.get('coin-name');


coinForm.addEventListener('submit', function(event){
    event.preventDefault();
    for (let i = 0; i < amount; i++) {
        let coin = document.createElement('div');
        coin.classList.add('coin');
        coin.innerText = data.get('coin');
        coinArea.appendChild(coin);
    }
});