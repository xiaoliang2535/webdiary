## 基于nodejs编写命令行

### 一、Nodejs原生

##### 创建目录webdiary

``` 
$ mkdir webdiary
$ cd webdiary && mkdir bin
$ npm init
```



##### cd到bin目录下，新建一个webdiary.js文件

``` 
#!/usr/bin/env node
var run = function (obj) {
  if(obj[1] === '-v'){
    console.log('webdiary version is : 1.0.0');
  }
  if(obj[1] === '-h'){
    console.log('Useage:');
    console.log('  -v --version [show version]');
  }
};
// 从第二个参数读起 webdiary -v
run(process.argv.slice(1)); 
```

控制台测试：`node webdiary.js -v`



##### 打开package.json文件，添加如下代码：

``` 
// 自定义的command命令 － webdiary
"bin": { "webdiary": "./bin/webdiary.js" } 
```



##### 转化为全局命令行代码

- `install ` 添加全局方法

``` 
$ sudo npm install . -g
```

- `npm link`  添加全局的symbolic link

``` 
$ sudo npm link

//返回信息：
/usr/local/bin/webdiary -> /usr/local/lib/node_modules/webdiary/bin/webdiary.js
/usr/local/lib/node_modules/webdiary -> /Users/echochi/workspace/webdiary

$ webdiary -v
webdiary version is : 1.0.0

$ webdiary -h 
Useage:
  -v --version [show version]
```

删除命令行：

``` 
$ sudo npm unlink
```



##### 错误处理

1. install  添加的方法可忽略警告
2. npm link 重复link时，会报如下错误

``` 
   npm link
   npm ERR! Darwin 14.3.0
   npm ERR! argv "node" "/usr/local/bin/npm" "link"
   npm ERR! node v0.10.36
   npm ERR! npm  v2.7.1
   npm ERR! path /usr/local/bin/webdiary
   npm ERR! code EEXIST

   npm ERR! Refusing to delete: /usr/local/bin/webdiray not in XXX...
   File exists: /usr/local/bin/webdiary
   Move it away, and try again.
```

删除 `/usr/local/bin/wcj` 再 `npm link` ， 删除此目录运行 `rm -rf /usr/local/bin/wcj`



##### 发布安装

``` 
$ npm publish
$ sudo npm install -g webdiary
```

### 二、Commander

##### 特性

自记录代码、自动生成帮助、合并短参数、默认选项、强制选项​​、命令解析、提示符

##### 安装

### 未完待续ing



