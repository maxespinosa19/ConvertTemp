
const form = document.querySelector('form')
form.addEventListener("submit" , FtoC) // F to celsius

function FtoC(event) {

    event.preventDefault()
    const fDegree = Number(event.target.fDegree.value)
    const celsius = (fDegree - 32 ) * 5/9
    document.querySelector('h2').innerText = fDegree.toFixed(0) + "°F is equal to " + celsius.toFixed(0) + "°C"    
}
