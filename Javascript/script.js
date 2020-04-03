const button = document.querySelector(".content__email__error__button");
const input = document.querySelector(".content__email__error__input");
const error_icon = document.querySelector(".content__email__error__icon");
const error_text = document.querySelector(".content__email__error__text")

button.addEventListener('click', function(event){
    var input_check = input.checkValidity();
    if(input_check == false){
        error_icon.style.display = "block";
        error_text.style.display = "block";
    }
    else{
        error_icon.style.display = "none";
        error_text.style.display = "none";
    }
})