const inputRange = document.getElementById('fader')
const inputPassword = document.getElementById('password')
const button = document.getElementById('generate')
const currentRange = document.getElementById('currentRange')


const _characters = 'QWERTYUIOPASDFGHJKLZXCVBNM'
const numbers = '1234567890'.split('')
const symbols = '!@#$%^&*()_+?}{||'.split('')
const uppercase = _characters.split('')
const lowercase = _characters.toLocaleLowerCase().split('')

const checkboxes =  Array.prototype.slice.call(document.getElementsByClassName('switch-btn'))
const checkboxesValues = {
    numbers: false,
    symbols: true,
    uppercase: true,
    lowercase: false
}

checkboxes.map(item => {
    item.addEventListener('click', () => {
        const itemName = item.id
        if (item.classList.contains('switch-on')){
            item.classList.remove('switch-on')
            checkboxesValues[itemName] = false
        }else{
            item.classList.add('switch-on')
            checkboxesValues[itemName] = true
        }
        console.log(checkboxesValues)
    })
})


function getRandomElemFromArray(arr){
    if (arr.length == 0) {
        return ""
    }
    let randomValue =  Math.round(Math.random() * arr.length)
    console.log(randomValue)
    while(!arr[randomValue]){
        randomValue =  Math.round(Math.random() * arr.length)
    }

    return arr[randomValue]
}

function getArray(){
    let arr = []
    if (checkboxesValues.symbols){
        arr = [...arr,...symbols]
    }
    if (checkboxesValues.numbers){
        arr = [...arr,...numbers]
    }
    if (checkboxesValues.uppercase){
        arr = [...arr,...uppercase]
    }
    if (checkboxesValues.lowercase){
        arr = [...arr,...lowercase]
    }

    return arr.join('')
}

button.addEventListener('click',() => {
    let value = ''
    for (let i = 0; i < inputRange.value; i++){
      value = value + getRandomElemFromArray(getArray())
    }
    inputPassword.value = value
})

inputRange.addEventListener('change', (e) => {
    currentRange.innerText = e.target.value
})

inputPassword.addEventListener('click',() => {
    navigator.clipboard.writeText(inputPassword.value);
})




