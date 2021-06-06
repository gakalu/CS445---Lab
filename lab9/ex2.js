class publish{
  observer={};

  on(event,fn){
    if(!this.observer[event]){
    this.observer[event]=fn;
  }else{
    this.observer[event].push(fn);
  }
}
 emit(event,message){
  if(this.observer[event])
  this.observer[event].forEach(fn=>fn(message));
 }
 off(event,fn){
  this.observer[event]=this.observer[event].filter(f=>f!==fn)
}
  }
  const p1=new publish();
  const p2=new publish();
  p1.on("foo1",[()=>message]);
  p1.on("foo2",[console.log]);
  console.log(p1);
  p1.off("foo1",[()=>message]);
  console.log(p1);