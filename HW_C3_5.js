class Appliance {
    constructor(power, room, name) {
        this.plugged = false
        this.power = power
        this.room = room
        this.name = name
    }
    plug() {
        this.plugged = true
        console.log(`Устройство "${this.name}" подключено в "${this.room}"`)
    }
    unplug() {
        this.plugged = false
        console.log(`Устройство "${this.name}" отключено`)
    }
}

class Tv extends Appliance {
    constructor(power, room, name, wifi) {
        super(power, room, name)
        this.wifi = wifi
    }
    connect() {
        if (this.wifi) {
            console.log('Подключился!')
        }
        else {
            console.log('Нет модуля wifi!')
        }
    }
}

class CookApp extends Appliance {
    constructor(power, room, name, ready) {
        super(power, room, name)
        this.ready = ready
    }
    cook(time) {
        this.ready = true
        console.log(`Устройство "${this.name}" готовило пищу ${time} минут`)
    }
}

toaster = new CookApp(700, 'кухня', 'тостер')
toaster.plug()
toaster.cook(50)
toaster.unplug()

sams = new Tv(300, 'гостиная', 'Телевизор Samsung', true)
sams.plug()
sams.connect()
sams.unplug()