# ScheduledRestart

A simple restart plugin for LiteLoaderBDS ScriptEngine

## 用法

将所有文件放入BDS所在文件夹，然后运行`run.bat`来启动服务器  
默认重启时间: 两小时  
如果你想要停止服务器，请按键盘上的`Ctrl + C`

## 如何修改重启时间?

打开 `plugins/ScheduledRestart`，然后修改最后一行，默认值: `119*60*1000`，单位: 毫秒