let numbers = [2,5,7,50,10]
let i = 0
let nextNum = document.querySelector('#nextNum')
let display = document.querySelector('#display')

function displayArray(){
    if (i < numbers.length){
        i++
        return (numbers[i])
    }
}
nextNum.addEventListener('click', ()=>{
    display.innerHTML = displayArray()
})
