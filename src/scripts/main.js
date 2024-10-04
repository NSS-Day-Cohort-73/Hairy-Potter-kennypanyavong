import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell, usePottery } from './PotteryCatalog.js'
import { PotteryList } from './PotteryList.js'

// Make 5 pieces of pottery at the wheel
const mug = makePottery("Mug", 1, 3)
console.log(mug)
const platter = makePottery("Platter", 2, 1)
console.log(platter)
const jug = makePottery("Jug", 3, 5)
console.log(jug)
const bowl = makePottery("Bowl", 1, 4)
console.log(bowl)
const vase = makePottery("Vase", 4, 6)
console.log(vase)

// Fire each piece of pottery in the kiln
let fireMug = firePottery(mug, 1200)
console.log(fireMug)
let firePlatter = firePottery(platter, 2000)
console.log(firePlatter)
let fireJug = firePottery(jug, 3000)
console.log(fireJug)
let fireBowl = firePottery(bowl, 2201)
console.log(fireBowl)
let fireVase = firePottery(vase, 2200)
console.log(fireVase)

// Determine which ones should be sold, and their price
// const sellMug = makePottery("Mug", 1, 3)
// firePottery(sellMug, 1200)

// const sellPlatter = makePottery("Platter", 2, 1)
// firePottery(sellPlatter, 2000)

toSellOrNotToSell(fireMug)
toSellOrNotToSell(firePlatter)
toSellOrNotToSell(fireJug)
toSellOrNotToSell(fireBowl)
toSellOrNotToSell(fireVase)

// const potteryItems = [
//     { name: "Mug", id: 1, height: 3, temperature: 1200 },
//     { name: "Platter", id: 2, height: 1, temperature: 2000 },
//     { name: "Jug", id: 3, height: 5, temperature: 3000 },
//     { name: "Bowl", id: 1, height: 4, temperature: 2201 },
//     { name: "Vase", id: 4, height: 6, temperature: 2200 }
// ]

// potteryItems.forEach(item => {
//     const pottery = makePottery(item.name, item.id, item.height);
//     console.log(pottery)

//     const firedPottery = firePottery(pottery, item.temperature);
//     console.log(firedPottery)

//     const sellPottery = toSellOrNotToSell(firedPottery)
//     console.log(sellPottery)
// })

const itemsForSale = usePottery()
console.log("Pottery available for sale:", itemsForSale)


const potteryHTML = PotteryList ()
const potteryListElement = document.querySelector('.potteryList')
potteryListElement.innerHTML = potteryHTML

