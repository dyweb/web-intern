# JavaScript DOM 

主要是指原生dom操作

### 概念

DOM是文档对象模型(Document Object Model，是基于浏览器编程（在本教程中，可以说就是DHTML编程）的一套API接口

### 获取元素(可以用在所有node上)

````js
// 根据id,返回单个Node
document.getElementById('paper');
// 根据tag,返回的是一组Node
document.getElementsByTagName('body');
// 根据name
document.getElementsByName('address');
````

### 元素的属性

childNodes 数组,子节点
parentNode 父节点
innerHTML 内部的html

### 元素的方法

remove() 删除节点(IE不支持)
removeChild(Node) 删除子节点
appendChild(Node) 添加子节点

createElement(TagName) 新建一个Node

### TODO:事件


