let LED_X = 0
let LED_Y = 0
basic.forever(function () {
    led.plot(LED_X, LED_Y)
    basic.pause(500)
    led.unplot(LED_X, LED_Y)
    if (LED_X == 0) {
        LED_X = 4
        if (LED_Y == 0) {
            LED_Y = 4
        } else {
            LED_Y += -1
        }
    } else {
        LED_X += -1
    }
})
