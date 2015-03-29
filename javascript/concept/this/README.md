# this

### 参考资料

各种不同调用环境下的this
http://www.ibm.com/developerworks/cn/web/1207_wangqf_jsthis/

### this 的使用场景

?只会在函数里出现this?

##### 1. 全局函数,this绑定到window上. node情况下绑定到?

````js
function gFunc(){
  this.x = 123;
}

console.log(x); // 123
````

##### 2. 函数绑定在对象上,this指的是对象.

````js
var person = {
  name:'jack',
  sayHi:function(){
    console.log('this is ', this);
    console.log('name should be jack', this.name);
  }
}
````

但如果我们换种绑定的方式,结果是一样的，绑定到person2上执行，sayHi2的上下文就变了

````js
function sayHi2(){
  console.log('this is ',this);
  console.log('this.name is',this.name);
}

var person2 = {
  name:'jack2',
  sayHi:sayHi2
};

// `this` would be window.
sayHi2();

// `this` would be person2
person2.sayHi();
````

如果是使用dom元素

````js
function sayHi3(){
  console.log('this is ', this);
}

var el = document.getElementById('btn');
el.onclick = sayHi3;
````

注意在html里的绑定不会改变this,sayHi3里的this仍是window
````html
<button type="button" name="button" onclick="sayHi3()">click me 2</button>
````

##### 3. 在函数里写的函数

注意内层函数的this还是window.并不是外层所绑定到的对象.所以需要有that这种.

````js
function world(){
  var that = this;
  var foo = 'bar';
  this.dummy = 'dummy';
  function china(){
    console.log('this in func china is ',this);
    console.log('that in func china is ',that);
    console.log('that.foo is ',that.foo);
    console.log('foo is ',foo);
    console.log('that.dummy is ',that.dummy);
  }

  china();
}

world();

// if we bind the func to an object
var map = {
  world:world
};
console.log('world is attached to map now');
// the nested function's this is Window ... not map
map.world();
````

##### 4. 使用call,apply,bind来更改this

call和apply的区别在于apply传数组，call传一个个参数

````js
function sayHi(to, to2){
  console.log('this is ',this);
  console.log('this.name is',this.name);
  console.log('say hi to ' + to + ' and ' + to2);
}

var jack = {
  name:'jack'
};

var marry = {
  name:'marry'
};

sayHi();
sayHi.apply(jack,['sunny','jane']);
sayHi.apply(marry,['sunny','jane']);
sayHi.call(jack,'sunny','jane');
````
