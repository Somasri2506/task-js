let p=prompt("Enter your PIN");
let pin=Number(p);
let bal=1000;
if (p==9087){
    let c=prompt("Enter your requirement:\n1.Withdraw\n2.Deposit\n3.Check Balance");
    if (c=="1"){
        var wd=Number(prompt("Enter the Amount:"));
        bal-=wd;
        alert("Withdraw successful! New Balance:"+ bal);
    }
    else if (c=="2"){
        var dp=Number(prompt("Enter the Amount:"));
        bal+=dp;
        alert("Deposited successfully! New Balance:"+ bal);
    }
    else{
        alert("Your Current Balance:"+ bal);
    }}
else{
    alert("Invalid Login")
}