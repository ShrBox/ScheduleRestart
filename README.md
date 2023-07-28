# ScheduledRestart

[中文](README-zh.md)  
A simple restart plugin for LiteLoaderBDS ScriptEngine

## Usage

Put all these files in ScheduledRestart folder into the directory which BDS located in, then run `run.bat` to start your server.  
Default restart time: 2 hours  
If you want to stop server, please press `Ctrl + C`

## How to modify restart time?

Open `plugins/ScheduledRestart`, then edit the last line, default value: `119*60*1000`, unit: millisecond