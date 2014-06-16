Yog 服务端 app 示例
=======

```bash
$ npm install -g lights
$ npm install -g yogurt
$ cd ~/projects

# 下载 demo 并安装依赖。
$ git clone https://github.com/fex-team/yog-app.git
$ cd yog-app
$ npm install

# 下载前端 demo
$ lights install yogurt-demo
$ cd yogurt-demo
$ yogurt release -d ../yog-app # or yog release -d ../yog-app

# 进入 yog-app 启动服务
$ cd ../yog-app
$ npm start 
```


