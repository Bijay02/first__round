const display = document.querySelector(".output");
const keys = document.querySelectorAll(".element");
const img = document.querySelector(".cross");

keys.forEach(function(key){
    display.value = ""
    key.addEventListener('click', calculate=(item)=> {
        let buttonText= item.currentTarget.textContent;
        display.value += buttonText
        if (display.value.length >= 10) {
            alert("Maximum 10 digits allowed")
        }
    })
})


img.addEventListener("click",()=>{
    if (display.value.length === 0){
        alert("No digits left")
    }
    else(
        display.value= display.value.substring(0,display.value.length -1)
    )
})