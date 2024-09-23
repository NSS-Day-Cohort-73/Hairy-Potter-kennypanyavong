const catalogForSale = []

export function toSellOrNotToSell(pottery) {
    if (!pottery.cracked) {
        if (pottery.weight >= 6) {
            pottery.price = 40;
        } else {
            pottery.price = 20;
        }
        catalogForSale.push(pottery);
    }
    return pottery;
}

export function usePottery() {
    return [...catalogForSale];
}