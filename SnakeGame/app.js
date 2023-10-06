const canvas=document.getElementById('canvas');
 
const pen=canvas.getContext('2d');
pen.fillStyle='red';

let y=50;
let x=50;

function init(){
    pen.fillRect(x,y,45,45);

}


function update(){
    x+=100;
   


}

function draw(){
    pen.clearRect(0,0,750,550);
    pen.fillRect(50,50,45,45);  
}

function gameLoop()
{
    init();
    update();
    draw();
}


const id =setInterval(gameLoop,100);