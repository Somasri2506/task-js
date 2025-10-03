let d=Number(prompt("Enter the Distance:"));
let type=Number(prompt("Enter type of transport:\n1.Train\n2.Bus\n3.Car\n4.Flight"));
switch (type){
    case 1:
        var fare=15*d;
        alert("Fare per Km for Train=15\nTotal Fare: "+fare);
        break;
    case 2:
        var fare=10*d;
        alert("Fare per Km for Bus=10\nTotal Fare: "+fare);
        break;
    case 3:
        var fare=12*d;
        alert("Fare per Km for Car=20\nTotal Fare: "+fare);
        break;
    case 4:
        var fare=30*d;
        alert("Fare per Km for Flight=30\nTotal Fare: "+fare);
        break;
}