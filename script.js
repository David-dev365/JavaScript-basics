// const word = document.getElementById("show").innerHTML = "Hello Javascript!"
const word = document.getElementById("show")

const colors = [ 'red', 'blue','crimson', 'orange']

function changeColor() {
    const index = Math.floor(Math.random() * colors.length)

    word.style.color = `${colors[index]}`
    // return{index}
    document.getElementById("range").innerHTML = `${index}`

    
}

// const {index} =changeColor()
// document.getElementById("range").innerHTML = `${index}`

changeColor();







const paint = document.getElementById("lock")


function changeStyle() {
    paint.style.color = "green"
}
 
// const document