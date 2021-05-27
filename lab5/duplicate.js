console.log("================syncrinous code==========================")
Array.prototype.removeDuplicates=function(){
let arr=[];
for(let i=0;i<this.length;i++){
    if(!arr.includes(this[i])){
        arr.push(this[i]);
}
}
return arr;
}
console.log("start");
let x=[2,7,89,4,2,2,2,4,6,7,6,4].removeDuplicates();
console.log(x);
console.log("end");
console.log("=================Asyncrinous code========================");
Array.prototype.removeDuplicates=function(){
    return new Promise((resolve,reject)=>{
        resolve([...new Set(this)]);
    });
}
console.log("start");
[4,1,5,7,2,3,1,4,6,5,2].removeDuplicates().then(console.log);
console.log("end");





