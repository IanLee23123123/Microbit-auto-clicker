// Start in a stopped state
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
// When button A is pressed, start clicking
input.onButtonPressed(Button.A, function () {
    running = true
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . . . . .
        `)
})
// When button B is pressed, stop clicking
input.onButtonPressed(Button.B, function () {
    running = false
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
let running = false
mouse.startMouseService()
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    # # # # #
    `)
basic.forever(function () {
    if (running) {
        for (let index = 0; index < 100; index++) {
            mouse.click()
        }
    }
})
