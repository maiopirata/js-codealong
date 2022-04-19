/* Foundation Challenges */

/**
 * A function which takes an array of employee objects and
 * returns just an array of their quotes so we can later put
 * them on the website.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {string[]} A list of the employees quotes for the website
 */

const employes = [
    {
        name: 'Soude',
        quote: 'carpe diem',
        yearsEmployed: 2,
        isManagement: false,
    }, // soude
    {
        name: 'Daniela',
        quote: 'carpe diem 2',
        yearsEmployed: 21,
        isManagement: true,
    }, // daniela
    {
        name: 'Moni',
        quote: 'carpe diem 3',
        yearsEmployed: 5,
        isManagement: false,
    }, // moni
]

const getEmployeeQuotes = (employeeArr) => { // first function
    return employeeArr.map( // map is the second function (returns an array)
            (employe, iter) => { // inner function is the third function
        if (iter === 0) {
            console.log('keys', Object.keys(employe))
            console.log('values', Object.values(employe))
            console.log('entries', Object.entries(employe))
            console.log('how many key we have', Object.keys(employe).length)
        }
        return employe.quote
    })
};

const quotes = getEmployeeQuotes(employes)
console.log(quotes)

const emptyObject = {
}

console.log(Object.keys(emptyObject).length === 0)

/**
 * A function to find the most expensive item in the basket and returns it in order to offer this customer a discount
 * later on down the line.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number}} The most expensive item in the shopping basket
 */
const findMostExpensiveItem = (shoppingBasketArr) => {
    // Write code here
};