
let para1 = document.getElementById("p1");
let span1 = document.getElementById("span1").value;
let span2 = document.getElementById("span2").value;
let result = document.getElementById("résultat");

let nombre1 = parseInt(span1.innerHTML);
let nombre2 = parseInt(span2.innerHTML);
let addition = nombre1 + nombre2;

result.innerHTML = (addition > 0) ? addition.toString() : (nombre1 + nombre2).toString();

if (addition > 0) {
    result.innerHTML = addition.toString();
}
else {
    result.innerHTML = (nombre1 - nombre2).toString();
}