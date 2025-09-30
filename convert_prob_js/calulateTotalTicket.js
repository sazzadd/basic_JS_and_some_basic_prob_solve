function calculateMoney(soldTickets) {
  let total = 120 * soldTickets - (500 + 8 * 50);
  return total;
}
console.log(calculateMoney(10))