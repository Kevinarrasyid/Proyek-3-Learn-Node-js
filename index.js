//console.log('Hello Node.js!')
//
// fs = require('fs')
//.writeFileSync('notes.txt', 'I live in Philadelphia')
//
// const checkUtils = require('./src/utils.js')
//
// checkUtils()
//const validator = require('validator')
//console.log(validator.isURL('https/moed.io')) //print: true


/*section 4 lesson 2
const command = process.argv[2]

if (command === 'add') {
console.log('Adding note!')
    }    else if (command === 'remove'){
    console.log('Removing note!')
}*/

/*section 4 lesson 3
const yargs = require('yargs')
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
})
console.log(yargs.argv)*/

/*const yargs = require('yargs')
yargs.version('1.1.0')
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('title: ' + argv.title)
        console.log('body: ' + argv.body)
    }
})*/

// lesson 5
/*const book = {
    title: 'Ego is the Enemy'
    author: 'Ryan Holiday'
}
// Covert JavaScript object into JSON string
const bookJSON = JSON.stringify(book)
// Covert JSON string into object
const bookObject = JSON.parse(bookJSON)
console.log(bookObject.title) // Print: Ego is the Enemy*/

//const square function (x) {
//return x * x
/*const square = (x) => {
    return x * x
    }
    onsole.log(square(2)) // Will print: 4*/

/*const squareAlt = (x) => x * x
console.log(squareAlt(2)) // Will print: 4*/

/*const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
    
    this.guestList.forEach((guest) => {
        console.log(guest + ' is attending ' + this.name)
    })
}
}
event.printGuestList()*/

//section 4 lesson 11
const users = [{
    name: 'Andrew Mead',
    age: 27
},{
    name: 'George Hudson',
    age: 72
},{
    name: 'Clay Klay',
    age: 45
}]
const user = users.find((user) => user.name === 'George Hudson')
console.log(user) // Will print the second object in the array
