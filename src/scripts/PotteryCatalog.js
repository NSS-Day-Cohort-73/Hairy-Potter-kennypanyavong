const catalogForSale = []

export const toSellOrNotToSell = (potteryPiece) => {
    if (potteryPiece.cracked) {
        return potteryPiece
    }
    if (potteryPiece.weight >= 6) {
        potteryPiece.price = 40
    } else {
        potteryPiece.price = 20
    }
    catalogForSale.push(potteryPiece)

    return potteryPiece
}

export const usePottery = () => {
    return [...catalogForSale]
}
//     if (!pottery.cracked) {
//         if (pottery.weight >= 6) {
//             pottery.price = 40;
//         } else {
//             pottery.price = 20;
//         }
//         catalogForSale.push(pottery);
//     }
//     return pottery;
// }

// export function usePottery() {
//     return [...catalogForSale];
// }