let potteryKey = 1

export function makePottery(shape, weight, height) {
    const potteryPiece = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryKey
    };
    potteryKey++;
    return potteryPiece;
}