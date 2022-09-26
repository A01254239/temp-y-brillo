let temperature_C = input.temperature() * (1.8 + 32)
if (temperature_C <= 14 && temperature_C <= -22) {
    basic.showString("R")
} else if (temperature_C <= 15 && temperature_C <= 23) {
    basic.showString("V")
} else if (temperature_C <= 24 && temperature_C <= 32) {
    basic.showString("A")
} else if (temperature_C >= 33) {
    basic.showString("-")
}
basic.forever(function () {
	
})
