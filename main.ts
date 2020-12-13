let sideslights = false
let move1 = false
input.onButtonPressed(Button.A, function () {
    if (sideslights == true) {
        sideslights = false
    } else {
        sideslights = true
    }
})
input.onButtonPressed(Button.B, function () {
    if (move1 == true) {
        move1 = false
    } else {
        move1 = true
    }
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Angry)
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Angry)
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Angry)
    basic.showIcon(IconNames.Asleep)
})
basic.forever(function () {
    if (sideslights == true) {
        cbit_小车类.RGB_Car_Big(60, 0, 0)
        basic.pause(1000)
        cbit_小车类.RGB_Car_Big(30, 30, 0)
        basic.pause(1000)
        cbit_小车类.RGB_Car_Big(0, 60, 0)
        basic.pause(1000)
        cbit_小车类.RGB_Car_Big(0, 30, 30)
        basic.pause(1000)
        cbit_小车类.RGB_Car_Big(0, 0, 60)
        basic.pause(1000)
        cbit_小车类.RGB_Car_Big(30, 0, 30)
        basic.pause(1000)
        cbit_小车类.RGB_Car_Big(20, 20, 20)
        basic.pause(1000)
    } else {
        cbit_小车类.RGB_Car_Big2(cbit_小车类.enColor.OFF)
    }
})
basic.forever(function () {
    if (move1 == true) {
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Run, 150)
        basic.pause(2000)
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Left, 150)
        basic.pause(2000)
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Right, 150)
        basic.pause(2000)
        cbit_小车类.CarCtrlSpeed(cbit_小车类.CarState.Car_Back, 150)
        basic.pause(2000)
    } else {
        cbit_小车类.CarCtrl(cbit_小车类.CarState.Car_Stop)
    }
})
