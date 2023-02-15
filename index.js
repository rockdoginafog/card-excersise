const inputName = document.getElementById("name")
const button = document.querySelector(".confirm")
const form = document.getElementById("form")
const placeholder1 = document.querySelector(".placeholder1")
const placeholder2 = document.querySelector(".placeholder2")
const placeholder3 = document.querySelector(".placeholder3")
const placeholder4 = document.querySelector(".placeholder4")
const placeholder5 = document.querySelector(".placeholder5")
const error = document.querySelector('.error')
const error2 = document.querySelector('.error2')
const error3 = document.querySelector('.error3')
const error4 = document.querySelector('.error4')
const name = document.getElementById('name')
const number = document.getElementById('number')
const mm = document.getElementById('mm')
const yy = document.getElementById('yy')
const cvc = document.getElementById('cvc')
const thankYou = document.querySelector('.thank-you')
const numberRegex = /[0-9 ]+/
const letterRegex = /[A-Za-z]/
const continueBtn = document.querySelector('.continue')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateNumber()
    validateMMYY()
    validateCVC()
    validateCardholder()
    if(number.value.match(numberRegex) && placeholder1.innerHTML.length > 18 && mm.value.match(numberRegex) && yy.value.match(numberRegex) && cvc.value.match(numberRegex) && placeholder5.innerHTML.length > 2 && name.value.match(letterRegex)){
        form.classList.add("hidden")
        thankYou.classList.remove("hidden")
    }
})

number.addEventListener('input', () =>{
    placeholder1.innerHTML = number.value
    if(placeholder1.innerHTML === ''){
        placeholder1.innerHTML = '0000 0000 0000 0000'
    }
})

name.addEventListener('input', () =>{
    placeholder2.innerHTML = name.value
    if(placeholder2.innerHTML === ''){
        placeholder2.innerHTML = 'Jane Appleseed'
    }
})

mm.addEventListener('input', () =>{
    placeholder3.innerHTML = mm.value
    if(placeholder3.innerHTML === ''){
        placeholder3.innerHTML = '00'
    }
})

yy.addEventListener('input', () =>{
    placeholder4.innerHTML = yy.value
    if(placeholder4.innerHTML === ''){
        placeholder4.innerHTML = '00'
    }
})

cvc.addEventListener('input', () =>{
    placeholder5.innerHTML = cvc.value
    if(placeholder5.innerHTML === ''){
        placeholder5.innerHTML = '000'
    }
})


function validateNumber(){
    if(number.value.match(numberRegex) && !number.value.match(letterRegex) && placeholder1.innerHTML.length > 18){
        number.classList.remove('decline')
        number.classList.add('pass')
        error.classList.add('hidden')
    }else{
        number.classList.add('decline')
        number.classList.remove('pass')
        error.classList.remove('hidden')
    }
}

function validateMMYY(){
    if(mm.value.match(numberRegex) && yy.value.match(numberRegex)){
        mm.classList.remove('decline')
        mm.classList.add('pass')
        yy.classList.remove('decline')
        yy.classList.add('pass')
        error2.classList.add('hidden')
    }else{
        mm.classList.add('decline')
        mm.classList.remove('pass')
        yy.classList.add('decline')
        yy.classList.remove('pass')
        error2.classList.remove('hidden')
    }
}

function validateCVC(){
    if(cvc.value.match(numberRegex) && placeholder5.innerHTML.length > 2){
        cvc.classList.remove('decline')
        cvc.classList.add('pass')
        error4.classList.add('hidden')
    }else{
        cvc.classList.add('decline')
        cvc.classList.remove('pass')
        error4.classList.remove('hidden')
    }
}

function validateCardholder(){
    if(name.value.match(letterRegex)){
        name.classList.remove('decline')
        name.classList.add('pass')
        error3.classList.add('hidden')
    }else{
        name.classList.add('decline')
        name.classList.remove('pass')
        error3.classList.remove('hidden')
        
    }
}

number.addEventListener('keydown', () =>{
        if(number.value.length % 5 == 4){
            number.value += " "
        }
    })

continueBtn.addEventListener('click', () =>{
    thankYou.classList.toggle('hidden')
    form.classList.toggle('hidden')
    form.reset()
    number.classList.remove('pass')
    name.classList.remove('pass')
    cvc.classList.remove('pass')
    mm.classList.remove('pass')
    yy.classList.remove('pass')
    placeholder1.innerHTML = '0000 0000 0000 0000'
    placeholder2.innerHTML = 'Jane Appleseed'
    placeholder3.innerHTML = '00'
    placeholder4.innerHTML = '00'
    placeholder5.innerHTML = '000'
})




















