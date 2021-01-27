var $input = document.getElementById('input');
const $form = document.getElementById('form');
const $resultContainer = document.getElementById('result-container');
var i = 2;


$form.addEventListener('submit', (event) =>{
    event.preventDefault()
    //Reset result container
    $resultContainer.innerHTML = ""

    num = $input.value;
    while ( i <= num){
        if(num % i == 0){
            $resultContainer.innerHTML += `<div class="result animate_animated animate__bounceIn">${num} | ${i}</div>`
            num = parseInt(num / i);
            i = 2
        }else{
            i = i + 1
        }
    }
    $resultContainer.innerHTML += `<div class="result animate_animated animate__bounceIn">${num} |</div>`

    event.currentTarget.reset();
})