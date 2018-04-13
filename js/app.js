'use strict';

function SalmonCookies(name, minHourlyCustomers, maxHourlyCustomers, avgCookiePerSale) {
  this.name = name;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiePerSale = avgCookiePerSale;
  this.totalCookiesSold = 0;
  this.cookiesSoldInformationByHour = [];
}

SalmonCookies.prototype.buildMarketSales = function () {
  var openHour = 6;
  var closeHour = 20;
  for (var i = openHour; i <= closeHour; i++) { // loop through the hours 
    var numberOfCustomerInCurrentHour = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;

    var numberOfCookiesSoldInCurrentHour = Math.round(numberOfCustomerInCurrentHour * this.avgCookiePerSale);
    this.totalCookiesSold = this.totalCookiesSold + numberOfCookiesSoldInCurrentHour;

    this.cookiesSoldInformationByHour.push(numberOfCookiesSoldInCurrentHour);
  }
};

SalmonCookies.prototype.displayMarketSales = function () {
  var cookiesTable = document.getElementById('cookiesTable'); // the <table></table>

  var cookieRow = document.createElement('tr'); // <tr></tr> - the row for 1st and pike
  cookiesTable.appendChild(cookieRow); // <table><tr><td>hey</td></tr></table>

  var cookieLocationTD = document.createElement('td'); // <td></td>
  cookieLocationTD.textContent = this.name; // <td>hey</td>
  cookieRow.appendChild(cookieLocationTD); // <table><tr><td>hey</td></tr></table>
   
  for(var i = 0; i < this.cookiesSoldInformationByHour.length; i++) {
    var numberOfCookiesTD = document.createElement('td'); //<td></td>
    numberOfCookiesTD.textContent = this.cookiesSoldInformationByHour[i];

    cookieRow.appendChild(numberOfCookiesTD);
  }

  var numberOfCookiesTotalTD = document.createElement('td'); //<td></td>
  numberOfCookiesTotalTD.textContent = this.totalCookiesSold;
  cookieRow.appendChild(numberOfCookiesTotalTD); // add row to rable
};

// need some help!!!
// function AddAnotherStore(event) {
//   event.startNewStore();
//   var element = event.target;
//   var newStore = new SalmonCookies(element.)
// }

var firstAndPike = new SalmonCookies('1st and pike', 23, 65, 6.3);
var airport = new SalmonCookies('SeaTac Airport', 3, 24, 1.2);
var centerOfSeattle = new SalmonCookies('Seattle Center', 11, 38, 3.7);
var capHill = new SalmonCookies('Capitol Hill', 20, 38, 2.3);
var beach = new SalmonCookies('Alki', 2, 16, 4.6);

firstAndPike.buildMarketSales();
airport.buildMarketSales();
centerOfSeattle.buildMarketSales();
capHill.buildMarketSales();
beach.buildMarketSales();

function createHeaderOfCookiesTable() {
  // build header for cookies table
  var openHour = 6;
  var closeHour = 20;
  var headerForCookiesTable = document.getElementById("headerForCookiesTable");
  var ourHeader = document.createElement('th');
  headerForCookiesTable.appendChild(ourHeader);

  for (var i = openHour; i <= closeHour; i++) { // loop through the hours
    var morningEvening = 'pm';
    if (i < 12) {
      morningEvening = 'am';
    }

    var hourNumber = i;
    if (i > 12) {
      hourNumber = i - 12;
    }

    ourHeader = document.createElement('th');
    ourHeader.textContent = hourNumber + ':00' + morningEvening;
    headerForCookiesTable.appendChild(ourHeader);
  }

  ourHeader = document.createElement('th');
  ourHeader.textContent = 'Daily Location Total';
  headerForCookiesTable.appendChild(ourHeader);
}

createHeaderOfCookiesTable();

firstAndPike.displayMarketSales();
airport.displayMarketSales();
centerOfSeattle.displayMarketSales();
capHill.displayMarketSales();
beach.displayMarketSales();

function newAdditionalStore(event) {
  event.preventDefault();
  var storeElement = event.target;
  var brandNewStore = new SalmonCookies(storeElement.nameStore.value, storeElement.maxHourlyCustomers.value, storeElement.minHourlyCustomers.value);
  newAdditionalStore(brandNewStore);
}

var storeElement = document.getElementById('another-store');
storeElement.addEventListener('enter', newAdditionalStore);
