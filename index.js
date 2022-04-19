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
            // if (iter === 0) {
                // console.log('keys', Object.keys(employe))
                // console.log('values', Object.values(employe))
                // console.log('entries', Object.entries(employe))
                // console.log('how many key we have', Object.keys(employe).length)
            // }
            return employe.quote
        })
};

const quotes = getEmployeeQuotes(employes)
// console.log(quotes)

const emptyObject = {
}

// console.log(Object.keys(emptyObject).length === 0)

/**
 * A function to find the most expensive item in the basket and returns it in order to offer this customer a discount
 * later on down the line.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number}} The most expensive item in the shopping basket
 */
const findMostExpensiveItem = (shoppingBasketArr) => {
    // Write code here
    // 1. using object.Values and then if
    // 2. use Math.max on the price array
    // 3. use a reduce to keep the max value
    // 4. filter for the price (array of prices, looping though the array, keep the highest value)

    // a. looping though the objects and keep the best one (1, 4, 3)
    // b. sorting the array

    // a with a simple forEach
    // a good way as well
    let mostExpensiveItemIdx = -1;
    let maxPrice = 0;
    shoppingBasketArr.forEach((item, index) => {
        if (item.price > maxPrice) {
            maxPrice = item.price;
            mostExpensiveItemIdx = index;
        }
    })
    // return shoppingBasketArr[mostExpensiveItemIdx];

    // a with a reduce
    const intialValue = {
        name: 'empty shopping bag',
        price: 0,
        hasFreeShipping: true,
        quantity: 1
    };
    // first iteration
    // acc = { name: 'not expensive', price: 0 }
    // item = { name: 'tv', price: 300, hasFreeShipping: true, quantity: 1 }
    // iter = 0
    // arr = myBasket

    // other iteration
    // acc = return of the previous iteration
    // item = the other item in my shopping bag
    // iter = 1
    // arr = myBasket   n time complexity 10M => 10M operation
    // preferred way
    const mostExpItem = shoppingBasketArr.reduce((acc, item, iter, arr) => {
        if (item.price > acc.price) return item
        else return acc
    }, intialValue)

    // not a smart way
    // b. sorting the array n * lon (n) 10M => 60M operation
    // compareFn > 0 -> swap a,b
    // compareFn <= 0 -> keep a,b
    return shoppingBasketArr.sort((a, b) => b.price - a.price)[0]
};

const myBasket = [
    {
        name: 'chair',
        price: 49,
        hasFreeShipping: true,
        quantity: 8
    },
    {
        name: 'tv',
        price: 300,
        hasFreeShipping: true,
        quantity: 1
    }
]

const mostExpensive = findMostExpensiveItem(myBasket)
// console.log(mostExpensive)

/**
 * A function which add a new key of totalPrice to each shopping basket item
 * in the array where total cost is
 * the price * the quantity of items ordered i.e.
 * Then returns a new array of objects
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} A new array where each object has had a total price added to it
 */
const settotalPrice = (shoppingBasketArr) => {
    // with forEach
    const newArray = []
    shoppingBasketArr.forEach(item => {
        const newItem = {
            ...item,
            totalPrice: item.price * item.quantity
        }
        newArray.push(newItem)
    })
        
    // with map
    const newArray2 = shoppingBasketArr.map(item => {
        return {
            ...item,
            totalPrice: item.price * item.quantity
        }
    })
    return newArray2
};

const basketWithTotalPrice = settotalPrice(myBasket)
// console.log(basketWithTotalPrice)

/**
 * A function which takes an array of meal objects, removes unneeded keys
 * from the objects and returns a new array of meal objects.
 *
 * @param {{id: number, name: string, ingredients: string[], country: string, timeStamp: number, userCreated: string}[]} mealsArr - An array containing meal objects
 * @returns {{id: number, name: string, ingredients: string[], country: string}[]} An array of cleaned meal objects
 */
const getImportantKeys = (mealsArr) => {
    const newMeals = mealsArr.map(item => {
        return {
            id: item.id,
            name: item.name,
            ingredients: item.ingredients,
            country: item.country
        }
    })
    return newMeals
};

const meals = [
    {
        id: 0,
        name: 'pasta bolognese',
        ingredients: ['pasta', 'salt', 'bolognese souce'],
        country: 'Italy',
        timeStamp: 1000,
        userCreated: 'Marco'
    }
]

const newMeals = getImportantKeys(meals)
console.log(newMeals)