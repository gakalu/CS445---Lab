const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
const promise=new Promise(function(resolve,reject){
if(isPrime(3)){
    setTimeout(()=>resolve("{prime:true}"),500);
}else{
    setTimeout(()=>reject("{prime:false}"),500);
}
});
console.log('start');
promise
.then(res => console.log(res))
.catch(err => console.error(err));
console.log('end');