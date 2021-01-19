function listProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ' : ' + obj[key]);
        }
    }
}

function checkProperty(prop, obj) {
    return prop in obj
}

function noProto() {
    return Object.create(null)
}

let a = {
    somestuff: 'stuff',
    otherstuff: 571
}

listProperties(a)
console.log(checkProperty('somestuff', a))
console.log(checkProperty('somestu', a))
console.log(noProto())