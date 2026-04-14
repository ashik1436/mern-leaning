nums=[1,2,3,4,5,8];
const square=nums.map((num)=>num *num);
console.log(square);
let sum = square.reduce((acc,cur)=>acc+cur,0);
let avg=sum/nums.length;
console.log(avg)
///
const ashu=nums.map((arr)=>arr+5)
console.log(ashu)

///

let strings=["ashik","prabhs","anushka"];
console.log( strings.map((str)=>str.toUpperCase()));

///

const doub=(arr,...args)=>[
    ...arr,
    ...args.map((v)=>v*2),
]
///

const mergeObj=(obj1,obj2)=>({...obj1,...obj2});