#### 1.准备
nodejs版本:v10.16.2
egret版本:5.4.1
#### 2.服务器
##### 2.1服务器启动方法
```sh
进入dacc/server     运行命令: npm install 
等待依赖库执行完成后运行命令:  tsc
执行 node ./dist/main.js 启动。
```
##### 2.2服务器调试方法
```sh
直接使用vscode打开dacc/server目录，
配置了两种启动方式:
1.当本地代码修改后，使用‘启动程序普通编译模式’编译并启动项目
2.本地代码未修改，使用‘光启动不编译’直接启动项目
```
#####2.3.服务器发布
启动publish.bat发布服务器代码，发布完成后发布的代码在dacc/server/publish中

####3.客户端
#####3.1调试
使用EgretWing打开dacc/client/dacc_client后直接F5启动即可.
也可以参照此文章使用vscode进行调试
```sh
https://blog.csdn.net/weixin_42253615/article/details/111877137
```
#####3.2发布
使用Egret Launcher发布
