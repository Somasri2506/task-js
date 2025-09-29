function age(){
let n=prompt("Enter your name:");
let a=prompt("Enter your age:");
a=Number(a);
if(a>=18){
    alert("Hello "+n+" you are eligible to vote!")
}
else{
    alert("Hello "+n+" you are not eligible to vote!");
}
}

function eligible(){
    age();
    let e=confirm("do you want to check again?");
    if(e){
        age();
    }
    else{
        alert("Good bye");
    }
}
eligible();
