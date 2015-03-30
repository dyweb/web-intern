# Regular expressions in JavaScript

#### 正则入门

##### 学习准备

工具
- 浏览器或者node,用于测试正则
- regulex http://jex.im/regulex/ 在线可视化
- 国内的在线测试 http://tool.chinaz.com/regex/

参考资料
- 30分钟入门(第二版) http://deerchao.net/tutorials/regex/regex.htm

##### 入门

常用的元字符

| 代码 | 说明 |
| --- | ---- |
| `.` |  匹配除换行符以外的任意字符 |
| `\w`|  匹配字母或数字或下划线或汉字 |
| `\s`|  匹配任意的空白符|
| `\d`|  匹配数字|
| `\b`|  匹配单词的开始或结束|
| `^` |  匹配字符串的开始|
| `$` |  匹配字符串的结束|

js用法
````js
var pattern = /hi/;
var str = 'hi hi';

// 测试正则是否匹配
pattern.test(str); // true

//
str.match(pattern); //
````
