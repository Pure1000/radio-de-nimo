radio.onReceivedNumber(function (receivedNumber) {
    serial.writeLine("radio.onReceivedNumber(function (receivedNumber) {...})")
    if (receivedNumber == 0) {
        serial.writeLine(" if (receivedNumber == 0) {...})")
        basic.showIcon(IconNames.Happy)
        serial.writeLine("basic.showIcon(IconNames.Happy)")
    }
    if (receivedNumber == 1) {
        serial.writeLine("if (receivedNumber == 1) {...})")
        basic.showIcon(IconNames.Sad)
        serial.writeLine("basic.showIcon(IconNames.Sad)")
    }
})
input.onButtonPressed(Button.A, function () {
    serial.writeLine("input.onButtonPressed(Button.A, function () {...})")
    radio.sendNumber(0)
    serial.writeLine("radio.sendNumber(0)")
    basic.showIcon(IconNames.Happy)
    serial.writeLine("basic.showIcon(IconNames.Happy)")
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("input.onButtonPressed(Button.B, function () {...})")
    radio.sendNumber(1)
    serial.writeLine("radio.sendNumber(1)")
    basic.showIcon(IconNames.Sad)
    serial.writeLine("basic.showIcon(IconNames.Sad)")
})
radio.setGroup(1)
serial.writeLine("radio.setGroup(1)")
