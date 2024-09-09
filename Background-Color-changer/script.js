const allButton = document.querySelectorAll('.btn')

allButton.forEach((btn)=>{
    btn.addEventListener("click",function(){
        let btnText = btn.innerText;
        document.body.style.backgroundColor = btnText;
    })
})
function addCustomColor(){
    const input = document.querySelector('#addColor');
    const applyButton = document.querySelector('#applyBtn');
    applyButton.addEventListener("click",function(){
        let inputText = input.value;
        console.log(inputText)
        document.body.style.backgroundColor = inputText;
        input.value = "";
    })
}
addCustomColor();