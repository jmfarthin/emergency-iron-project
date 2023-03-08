var button = document.getElementById('button')
var HiddenCard = document.getElementById('Go-Card')
var PromptCard = document.getElementById('card1')
var Lower = document.getElementById('lower')
var Upper = document.getElementById('upper')

function loadIn(){
    HiddenCard.classList.add('is-hidden')
}

button.onclick = function() {
    
    PromptCard.style.display = "none",
    HiddenCard.classList.remove("is-hidden");
    HiddenCard.classList.add("is-block");
}
loadIn() 

Upper.addEventListener('click',remove)
Lower.addEventListener('click',remove)

function remove() {
        HiddenCard.classList.remove("is-block");
        HiddenCard.classList.add("is-hidden")
    }

   


