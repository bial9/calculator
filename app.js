function value(num){
    var input = document.getElementById("input")
    input.value += num;
}
function total(){
    var input = document.getElementById("input")
input.value = eval(input.value);
}
function allclear(){
var input = document.getElementById("input")   
input.value = ""  
}
