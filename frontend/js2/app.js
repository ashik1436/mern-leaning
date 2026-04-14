// Createanumbervariablenumwithsomevalue.
// Now,print“good”if the number isdivisible by10 and print“bad”ifitisnot.
num =15;
if (num%10==0){
    console.log("good");
}
else{
    console.log("bad");
}
//Taketheuser'sname&ageasinputusingprompts.
// Thenreturnbackthefollowingstatementtotheuserasanalert(bysubstitutingtheirname&age):nameisageyearsold
//name=prompt("enter your name");
//age=prompt("enter your age");
//console.log(`your name is ${name} and age is ${age}`);
//Qs3.Writeaswitchstatementtoprintthemonthsinaquarter.
// MonthsinQuarter1:January,February,MarchMonths
// inQuarter2:April,May,JuneMonths
// inQuarter3:July,August,SeptemberMonths
// inQuarter4:October,November,December[Usethenumberasthecasevalueinswitch]
quarter=7;
switch(quarter){
    case 1:console.log("jan,feb,march")
    break;
    case 2:console.log("april,may,june")
    break;
    case 3:console.log("july,august,sept")
    break;
    case 4:console.log("oct,nov,dec")
    break;
    default:
    console.log("gooodnight")
}
//Qs4.Astringisagoldenstringifitstartswiththecharacter‘A’or‘a’andhasatotallengthgreaterthan5.
// Foragivenstringprintifitisgoldenornot
str="Ashiks";
if((str[0]=="A" ||str[0]=="a") && (str.length>5)){
    console.log("gold");
}
else{
    console.log("bad");
}
//Qs5.Writeaprogramtofindthelargestof3numbers
let a=1;
let b=31;
let c=9;
if(a>b){
    if(a>c){
        console.log("a is greater");
    }
    else{
        console.log("c is greater");
    }
}
else{
    if(b>c){
    console.log("b is greater");
    }
    else{
    console.log("c is greater")
    }
}
//Qs6(Bonus).Writeaprogramtocheckif2numbershavethesamelastdigit
// Eg:32and47852havethesamelastdigiti.e.2
let num1=432;
let num2=452;
if ((num1%10==num2%10) ){
    console.log("same",num1%10)
}
else{
    console.log("different")
}