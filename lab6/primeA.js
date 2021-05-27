const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
const promise=new Promise(function(resolve,reject){

if(isPrime(5)){
    setTimeout(()=>resolve("{prime:true}"),500);
}else{
    setTimeout(()=>reject("{prime:false}"),500);
}
});
async function isPrimeAsync(num) {
    let result = await isPrime(5);
    console.log(result);
}
console.log('start');
isPrimeAsync(5);
console.log('end');
