let arr=[1,2,3,4,5,23];
let n=3;
m=arr.slice(0,n)
console.log(m)
s=arr.slice(arr.length-n)
console.log(s)

str="enter  ";
if ((str.length)==0){
    console.log("blank")
}
else{
    console.log("no blank")
}
 
idx =2;
if(str[idx]==str[idx].toLowerCase()){
    console.log("yess");
}
else{
    console.log("no");
}

n=str.trim();
console.log(n)
item=23
if (arr.indexOf(item)!=-1){
    console.log("exists")
}
else{
    console.log("not")
}