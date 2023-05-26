loops.everyInterval(60000, function () {
    while (pins.analogReadPin(AnalogPin.C16) < 2) {
        basic.showString("KAFFEE!!!", 300)
    }
    basic.showString("Danke", 60000)
})
