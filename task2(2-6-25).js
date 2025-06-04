let score=prompt("enter the score obtained");
let grade;

if(score>=80 && score<=100)
{
    grade="A";
}
else if(score>=70 && score<=89)
{
    grade="B";
}
else if(score>=60 && score<=69)
{
    grade="c";
}
else if(score>=50 && score<=59)
{
    grade="D";
}
else if(score>=0 && score<=49)
{
    grade="F";
}
else{
    document.writeln("only numbers from 0 to 100 are valid");
}

document.writeln("The grade for your marks is ",grade);