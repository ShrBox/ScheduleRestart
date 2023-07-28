ll.registerPlugin("ScheduledRestart", "", [1, 0, 0])
setTimeout(() => {
    if (ll.language == "zh_CN") {
        mc.broadcast("[Restart] 服务器将在一分钟后重启，请寻找安全的位置退出服务器")
    } else {
        mc.broadcast("[Restart] Server will restart in a minute, please find a secure position prepare for disconnect")
    }
    setTimeout(() => {
        let countDown = 10
        setInterval(() => {
            if (!countDown) {
                mc.runcmdEx("stop")
            }
            if (ll.language == "zh_CN") {
                mc.broadcast("[Restart] 重启倒计时: " + countDown)
            } else {
                mc.broadcast("[Restart] Restart countdown: " + countDown)
            }
            --countDown
        }, 1000)
    }, 50 * 1000)
}, 119 * 60 * 1000)