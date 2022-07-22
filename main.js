const date = document.querySelector("#date")
const num = document.querySelector('#num')
const btn = document.querySelector(".btn")
const result = document.querySelector('.result')
btn.addEventListener('click',calculateSum)

function calculateSum(){
    if(!date.value || !num.value){
        return result.innerText = "Please enter both the fields"
    }
    console.log(date.value);
    const value = date.value.replaceAll("-","")
    console.log(value);
    let sum = 0
    for(i= 0; i<value.length;i++){
       sum =sum + Number(value.charAt(i));
 
       
    }
    findLuck(sum)
}

function findLuck(sum){
    let enteredNum = num.value

    if(sum%enteredNum===0){
       result.innerText = enteredNum+' is a lucky number!! 🥳 🥳 🥳'
    }else{
        result.innerText =  enteredNum+' is not that lucky 😕'

    }
}