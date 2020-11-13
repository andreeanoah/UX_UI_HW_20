let button = document.getElementById('project');
function color(){
    return Math.floor(Math.random()* 256);
}
function colorChange(event){
    let randomColor = 'rgb(' + color() + ',' + color() + "," + color() +')';
    event.target.style.backgroundColor = randomColor;
}
button.addEventListener('click', colorChange);
