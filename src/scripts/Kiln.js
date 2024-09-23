export function firePottery(pottery, temperature) {
    pottery.fired= true;
    pottery.cracked = temperature > 2200;
    return pottery;
}