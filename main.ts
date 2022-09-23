let Tall_1 = 0
let Tall_2 = 0
let Måte = 0
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showNumber(Tall_1)
    basic.pause(2000)
    basic.showNumber(Tall_2)
})
input.onButtonPressed(Button.A, function () {
    Tall_1 += 1
})
input.onButtonPressed(Button.AB, function () {
    if (Måte == 0) {
        Måte = 0
        Tall_1 = 0
        Tall_2 = 0
        basic.showNumber(0)
    } else {
        if (Måte == 1) {
            basic.showNumber(Tall_1 + Tall_2)
            Måte = 0
            Tall_1 = 0
            Tall_2 = 0
            basic.pause(2000)
            basic.showNumber(0)
        } else {
            if (Måte == 2) {
                basic.showNumber(Tall_1 - Tall_2)
                Måte = 0
                Tall_1 = 0
                Tall_2 = 0
                basic.pause(2000)
                basic.showNumber(0)
            } else {
                if (Måte == 3) {
                    basic.showNumber(Tall_1 * Tall_2)
                    Måte = 0
                    Tall_1 = 0
                    Tall_2 = 0
                    basic.pause(5000)
                    basic.showNumber(0)
                } else {
                    if (Måte == 4) {
                        basic.showNumber(Tall_1 / Tall_2)
                        Måte = 0
                        Tall_1 = 0
                        Tall_2 = 0
                        basic.pause(5000)
                        basic.showNumber(0)
                    } else {
                        if (Måte == 5) {
                            basic.showNumber(Tall_1 ** Tall_2)
                            Måte = 0
                            Tall_1 = 0
                            Tall_2 = 0
                            basic.pause(5000)
                            basic.showNumber(0)
                        } else {
                            if (Måte == 6) {
                                basic.showNumber(Math.sqrt(Tall_1))
                                Måte = 0
                                Tall_1 = 0
                                Tall_2 = 0
                                basic.pause(2000)
                                basic.showNumber(0)
                            }
                        }
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Tall_2 += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Måte += 1
    if (Måte == 1) {
        basic.showString("+")
    } else {
        if (Måte == 2) {
            basic.showString("-")
        } else {
            if (Måte == 3) {
                basic.showString("*")
            } else {
                if (Måte == 4) {
                    basic.showString("/")
                } else {
                    if (Måte == 5) {
                        basic.showLeds(`
                            . . . # .
                            . . . . #
                            # . # . .
                            . # . . .
                            # . # . .
                            `)
                    } else {
                        if (Måte == 6) {
                            basic.showLeds(`
                                . . . . .
                                . . # # .
                                . . # . #
                                # . # . .
                                . # . . .
                                `)
                        }
                    }
                }
            }
        }
    }
})
