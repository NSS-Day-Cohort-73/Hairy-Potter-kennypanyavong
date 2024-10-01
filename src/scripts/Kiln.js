export const firePottery = (pottery, temperature) => {
    pottery.fired= true;
    pottery.cracked = temperature > 2200;
    return pottery;
}