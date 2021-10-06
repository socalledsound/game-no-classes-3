// constants to set the canvas size to the size of the window
const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
// i changed these variable names
// and also changed them where we call the functions
// variables for mario
let marioX = canvasWidth/2
let marioY = canvasHeight/2
let marioWidth = canvasWidth/30
let marioHeight = canvasWidth/15
let marioSpeed = 10
// variables for the coin
let coinWidth = canvasWidth/30
let coinHeight = canvasWidth/15
let coinX = canvasWidth - canvasWidth/10
let coinY = canvasHeight/2
let showCoin = true

// now lets load in some assets
let marioImg, coinImg


function preload(){
    marioImg = loadImage('./assets/mario.png')
    coinImg = loadImage('./assets/coin.png')
}

function setup(){
    createCanvas(canvasWidth, canvasHeight)

}

function draw(){
    background(30)
    // now we have some functions (below) that draw our characters!
    // instead of a color let's pass in an image
    drawMario(marioImg, marioX, marioY, marioWidth, marioHeight)
    if(showCoin){
        drawCoin(coinImg, coinX, coinY, coinWidth, coinHeight)
        
    }
    
    // every time through the draw loop let's check if mario made it to the coin
    let atGoal = checkGoal(marioX, marioY, marioWidth, marioHeight, coinX, coinY, coinWidth, coinHeight)
    if(atGoal){
        // let's do something here like maybe make the coin disappear?
        showCoin = false
        // we could also play a sound!  and add to the score, which we'll do in the next one
    }

}

function keyPressed(){
    console.log(key)
    if(key === 'd'){
        marioX+=marioSpeed
    }
    // now make it go other directions when other keys are pressed
}

// new draw functions now, they use an image instead
// we could probably write just one but I like the way it looks in the draw loop better this way personally
// and later if we want to change the way we draw this we can
function drawMario(img, x, y, w, h){

    image(img, x, y, w, h)
}

function drawCoin(img, x, y, w, h){
    image(img, x, y, w, h)
}

// notice how again I used different parameter names rather than the specific ones in the main program
// that way we can use this function again in another project if we want to
function checkGoal(x1,y1,w1, h1, x2, y2, w2, h2){
    if(x1 + w1 > x2 &&
        x1 < x2 + w2 && 
        y1 < y2 + h2 &&
        y1 + h1 > y2  ){
            return true
        } else {
            return false
        }
}



// function makeCharacter(x,y,size,color){
//     return{
//         x:x,
//         y:y,
//         size:size,
//         color: color
//     }
// }