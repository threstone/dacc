#### 1.访问以下网址查看最新进度:
```sh
http://threstone.heitailb.com/dacc_client
```
#### 2.准备
nodejs版本:v10.16.2
egret版本:5.4.1
#### 3.服务器
##### 3.1服务器启动方法
进入dacc/server     运行命令:
```sh
npm install 
```
等待依赖库执行完成后运行命令: 
```sh
tsc
```
如果tsc命令执行报错，可能是没有安装typescript模块,执行以下命令安装后再重新执行tsc:
```sh
npm install -g typescript
```

最后执行以下命令启动:
```sh
node ./dist/main.js
```
##### 3.2服务器调试方法
```sh
直接使用vscode打开dacc/server目录，
配置了两种启动方式:
1.当本地代码修改后，使用‘启动程序普通编译模式’编译并启动项目
2.本地代码未修改，使用‘光启动不编译’直接启动项目
```
##### 3.3.服务器发布
启动publish.bat发布服务器代码，发布完成后发布的代码在dacc/server/publish中
#### 4.客户端
##### 4.1调试
使用EgretWing打开dacc/client/dacc_client后直接F5启动即可.
也可以参照此文章使用vscode进行调试
```sh
https://blog.csdn.net/weixin_42253615/article/details/111877137
```
##### 4.2发布
使用Egret Launcher发布,注意事项请查看dacc/client/dacc_client/README.md
