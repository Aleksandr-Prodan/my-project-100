function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = quantity * pricePerDroid;
    if (totalPrice > customerCredits) {
        return `Insufficient funds!`;
    } else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
}
console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

function formatMessage(message, maxLength) {
    if (message.length === maxLength || message.length < maxLength) {
        return `"${message}"`;
    } else {
        return `"${message.slice(0, maxLength)}..."`;
    }
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

function checkForSpam(message) {
    const lower = message.toLowerCase();
    return lower.includes("spam") || lower.includes("sale");
}
// function checkForSpam(message) {
//     const lower = message.toLowerCase();
//     if (lower.includes("spam") || lower.includes("sale")) {
//         return true;
//     } else {
//         return false;
//     }
// }

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

function getShippingCost(country) {
    let price;
    switch (country) {
        case "China":
            price = 100;
            return `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Chile":
            price = 250;
            return `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Australia":
            price = 170;
            return `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Jamaica":
            price = 120;
            return `Shipping to ${country} will cost ${price} credits`;
            break;
        default:
            return `Sorry, there is no delivery to your country`;
    }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"