// display function

function display(val){
    document.getElementById('input').textContent += val;
}


function clr(){
    document.getElementById('input').textContent = "";
}

function result(){
    const x = document.getElementById('input').textContent;
    const y = eval(x)
    document.getElementById('input').innerHTML = y;
}

function delchar(){
    const str = document.getElementById('input').textContent;
    const del = str.slice(0, -1)
    document.getElementById('input').textContent = del;
}