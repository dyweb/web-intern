# this

### 参考资料

各种不同调用环境下的this
http://www.ibm.com/developerworks/cn/web/1207_wangqf_jsthis/

### this 的使用场景

?只会在函数里出现this?

1. 全局函数,this绑定到window上. node情况下绑定到?

````js
function gFunc(){
  this.x = 123;
}

console.log(x); // 123
````

2. 
