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
var pattern = /hi/;　// /h1/g /hi/i /hi/gi 全局匹配和是否区分大小写
var str = 'hi hi';
// 测试正则是否匹配
pattern.test(str); // true
//
str.match(pattern); //
// TODO:其他方法 search, exec
````

重复

| 代码 | 说明 |
| ---- | ---- |
| `*` | 重复零次或更多次 |
| `+`| 重复一次或更多次 |
| `?`| 重复零次或一次 |
|  `{n}`  |    重复n次  |
| `{n,}` | 重复n次或更多次 |
| `{n,m}` | 重复n到m次 |

````js
var patternPhone = /\d{11}/;
var jackPhone = 18818233456;
console.log(patternPhone.test(jackPhone));
````
范围 `[]`

eg: `[aeiou]` 匹配任何一个英文元音字母
eg: `[0-9]` 等价于 `\d`

````js
var patternHasAbc = /[abc]/;
var hasAbc = 'i have a dream';
var noAbc = 'dirt dust';

console.log(patternHasAbc.test(hasAbc));
console.log(patternHasAbc.test(noAbc));
````

捕获 `()`

eg: `(\w+)`

````js
var patternName = /name:(\w+)\s+gender:(\w+)/;
var profile = 'name:jack gender:male';

var result = profile.match(patternName);
console.log(result);// ["name:jack ", "jack", index: 0, input: "name:jack gender:male"]
console.log(result[1]); // jack
console.log(result[2]); // male
````
####　常用正则表达式

更多的就之后再说了...
