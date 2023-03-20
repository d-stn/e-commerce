// if price is 123456789, this function returns "1,234,567.89" 
export const displayPrice = (price) => {    // price in cents
    return `€${(price / 100).toLocaleString()}`
}