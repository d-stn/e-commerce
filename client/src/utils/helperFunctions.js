// DISCLAIMER
// A price should never be used by itself anywhere in this app
// It must always be inside displayPrice() function

export const displayPrice = (price) => {
    return `€${Math.trunc(price / 100)}.${price % 100}`
}