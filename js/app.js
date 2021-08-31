'use strict';
let top = ['Order Image','Order Details'];
let containerEl = document.getElementById('container');
let tableEl = document.getElementById('table');
let custTable = [];
containerEl.appendChild(tableEl);
let formEl = document.getElementById('carForm');
formEl.addEventListener('submit', addCar);

function carRent(custName, carModel, carPrice) {
  this.custName = custName;
  this.carModel = carModel;
  this.carPrice = this.randCarPrice;
  this.custTable = [];
  this.push(this);
}
function pushToStorage() {
  let data = JSON.stringify(custTable);
  localStorage.setItem('custTable', data);
}
function getFromStorage() {
  custTable = JSON.parse(localStorage.getItem('custTable'));
}
carRent.prototype.randCarPrice = function(){
  return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
}

function renderTHead(){
  let theadEl = document.createElement('thead');
  let trEl = document.createElement('tr');
  let thEl = document.createElement('th');
  thEl.textContent = ' ';
  trEl.appendChild(thEl);
  for (let i=0; i<top.length; i++){
    let thEl = document.createElement('th');
    thEl.textContent = top[i];
    trEl.appendChild(thEl);
  }
  theadEl.appendChild(trEl);
  tableEl.appendChild(theadEl);
}
renderTHead();