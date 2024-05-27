/* this function calculates total price of a new order
*@param {Array} products cartProduct: Array of Objetcs
*@returns {number} Total price
*/
export const totalPrice = (products) => {

    let sum = 0
    products.forEach(element => sum += element.price)
        
    return sum  

}