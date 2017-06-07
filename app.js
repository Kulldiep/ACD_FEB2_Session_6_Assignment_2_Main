function myFunction() {
    var a= document.getElementById('a').value;
    var b=document.getElementById('b').value;
    var c=document.getElementById('c').value;
    var greeting;
    if (a > b && a > c) {
        greeting = "A is greater than B and C";
        } else if (a < b && b > c) {
        greeting = "B is greater than A and C";
        }
        else  {
        greeting = "C is greater than A and B";
    }
    document.getElementById("demo").innerHTML = greeting;
}