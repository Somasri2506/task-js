let a=prompt("1.How many colors are in a rainbow?\nA.three\nB.seven\nC.five\nD.two");
let score=0;
switch (a){
    case "A":
        alert("Incorrect");
        break;
    case "B":
        alert("Correct");
        score+=1;
        break;
    case "C":
        alert("Incorrect");
        break;
    case "D":
        alert("Incorrect");
        break;
}
let b=prompt("2.Which is the capital of India?\nA.Assam\nB.New Delhi\nC.Punjab\nD.Tamil Nadu");
switch(b){
    case "A":
        alert("Incorrect");
        break;
    case "B":
        alert("Correct");
        score+=1;
        break;
    case "C":
        alert("Incorrect");
        break;
    case "D":
        alert("Incorrect");
        break;
}
let c=prompt("3.what is the value of 98 divided by 2?\nA.14\nB.56\nC.49\nD.10");
switch(c){
    case "A":
        alert("Incorrect");
        break;
    case "B":
        alert("Incorrect");
        break;
    case "C":
        alert("Correct");
        score+=1;
        break;
    case "D":
        alert("Incorrect");
        break;
}
alert("Your Final Score:"+score+"/3");