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

#### 2. 函数绑定在对象上,this指的是对象.

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
