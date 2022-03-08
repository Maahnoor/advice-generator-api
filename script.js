const title= document.getElementById('advice-number');
const advice = document.getElementById('advice-text');
const getBtn = document.getElementById('dice-image');
getBtn.addEventListener('click',()=> getAdvice());

async function getAdvice() {
    fetch('https://api.adviceslip.com/advice', {cache: "no-cache"})
    .then((obj) => obj.json())
    .then((response) => {
    title.innerHTML = `advice  # ${response.slip.id}`;
    advice.innerHTML= `"${response.slip.advice}"`;
    })
  }
getAdvice();
