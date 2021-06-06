const feb=(num,memo)=>{
memo={};
if(num<=1){
  return 1;
}
  else{
return memo[num]=feb(num-1,memo)+feb(num-2,memo)
  }
}
console.log(feb(5));