function fn(a,b,c){
  return a + b + c
}
let props = []
function curry(){
  
  props.push(...arguments)
  // console.log(props)
  if(props.length >= fn.length){
    return fn.apply(this, props)
  }else{
    return curry
  }
  // return function curried(){
  //   props.push(...arguments)
  //   if(props.length == fn.length){
      
  //     return fn.apply(this, props)
  //   }
  //   else{
      
  //     return function(arg2) {  
  //       return curried.call(this, arg2)
  //   }
  //   }
  // }
  
}

console.log(curry(1,2)(3,4))