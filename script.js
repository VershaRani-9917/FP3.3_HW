const items = [
  { id: 1, title: "Item 1", money: 10 },
  { id: 2, title: "Item 2", money: 20 },
  { id: 3, title: "Item 3", money: 15 },
  { id: 4, title: "Item 4", money: 25 },
];

const itemListContainer = document.querySelector("#itemsList");
const totalCostContainer = document.querySelector("#totalCost");
const averageCostContainer = document.querySelector("#averageCost");

const itemList = items.reduce(
  (accumulator, currentValue) => {
    accumulator.totalMoney += currentValue.money;

    // Display the item in the list
    const listItem = document.createElement("li");
    listItem.textContent = `${currentValue.title} - $${currentValue.money}`;
    itemListContainer.appendChild(listItem);

    return accumulator;
  },
  { totalMoney: 0 }
);

const averageMoney = itemList.totalMoney / items.length;
totalCostContainer.textContent = itemList.totalMoney.toFixed(2);
averageCostContainer.textContent = averageMoney.toFixed(2);
