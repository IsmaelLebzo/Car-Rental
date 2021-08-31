'use strict';
let form = document.getElementById('carForm');
let container = document.getElementById('container');
let arrCar = [];
let table = document.createElement('table');
container.appendChild(table);
table.id = 'table';
let theadEl = document.createElement('thead');
table.appendChild(theadEl);
let trEl = document.createElement('tr');
theadEl.appendChild(trEl);
let thEl1 = document.createElement('th');
trEl.appendChild(thEl1);
thEl1.textContent = 'Order Image';
let thEl2 = document.createElement('th');
thEl2.appendChild(trEl);
thEl2.textContent = 'Order Details';
let tbody = document.createElement('tbody');
table.appendChild(tbody);

function saveToLocalStorage() {
  let data = JSON.stringify(arrCar);
  localStorage.setItem('data', data);
}

function loadFromLocalStorage() {
  let carData = localStorage.getItem('data');
  if (carData) {
    let data = JSON.parse(carData);
    for (let i = 0; i < data.length; i++) {
      let newOrder = new CarRent(data[i].customerName, data[i].carModel, data[i].price);
      newOrder.render();

    }
  }
}

function CarRent(custName, carModel, carPrice) {
  this.custName = custName;
  this.carModel = carModel;
  this.carPrice = carPrice;
  arrCar.push(this);
}
CarRent.prototype.render = function () {
  let trEl = document.createElement('tr');
  tbody.appendChild(trEl);
  let tdEl = document.createElement('td');
  tbody.appendChild(tdEl);
  let img = document.createElement('img');
  img.src = `img/${this.carModel}.jpg`
  tdEl.appendChild(img);
  let tdEl1 = document.createElement('td');
  trEl.appendChild(tdEl1);
  tdEl1 = `Customer Name: ${this.custName} Car Model : ${this.carModel} Car Price : ${this.carPrice}`;
};
loadFromLocalStorage();

form.addEventListener('submit', submitHandler);
function submitHandler(event) {
  event.preventDefault();
  let customerName = event.target.customerName;
  let carModel = event.target.carModel;
  let price = randomPrice();

  let newOrder = new CarRent(customerName, carModel, price);
  newOrder.render();

  saveToLocalStorage();

}

function randomPrice() {
  return Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);
}

