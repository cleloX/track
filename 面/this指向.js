var name = 'a'
var obj = {
  name: 'obj',
  say: function(){
    console.log(this.name)
  }
}
var f = obj.say
f()
