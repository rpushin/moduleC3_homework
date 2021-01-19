function Appliance(power, room, name) {
    this.plugged = false
    this.power = power
    this.room = room
    this.name = name
}
Appliance.prototype.plug = function () {
    this.plugged = true
    console.log(`Устройство "${this.name}" подключено в "${this.room}"`)
}
Appliance.prototype.unplug = function () {
    this.plugged = false
    console.log(`Устройство "${this.name}" отключено`)
}
function Tv(power, room, name, wifi) {
    Appliance.call(this, power, room, name)
    this.wifi = wifi
}
Tv.prototype = new Appliance()
Tv.prototype.connect = function () {
    if (this.wifi) {
        console.log('Подключился!')
    }
    else {
        console.log('Нет модуля wifi!')
    }
}
function CookApp(power, room, name, ready) {
    Appliance.call(this, power, room, name)
    this.ready = ready
}
CookApp.prototype = new Appliance()
CookApp.prototype.cook = function (time) {
    this.ready = true
    console.log(`Устройство "${this.name}" готовило пищу ${time} минут`)
}

toaster = new CookApp(700, 'кухня', 'тостер')
toaster.plug()
toaster.cook(50)
toaster.unplug()

sams = new Tv(300, 'гостиная', 'Телевизор Samsung', true)
sams.plug()
sams.connect()
sams.unplug()