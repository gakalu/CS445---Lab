// function person(id:number,name:string){
//  return id+" "+name;   
// }
// console.log(person(20,"Getachew"));
//====================================================
var count = 22;
var counter = {
    count: 0,
    incrementPeriodically: function () {
        var _this = this;
        var count = 10;
        setInterval(function () { console.log(++_this.count); }, 1000);
    }
};
var test = counter.incrementPeriodically;
test();
