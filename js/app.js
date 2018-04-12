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
    var morningEvening = 'pm: ';
    if (i < 12) {
      morningEvening = 'am: ';
    }

    var hourNumber = i;
    if (i > 12) {
      hourNumber = i - 12;
    }

    var numberOfCustomerInCurrentHour = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;

    var numberOfCookiesSoldInCurrentHour = Math.round(numberOfCustomerInCurrentHour * this.avgCookiePerSale);
    this.totalCookiesSold = this.totalCookiesSold + numberOfCookiesSoldInCurrentHour;

    var textContentForCurrentHour = hourNumber + morningEvening + numberOfCookiesSoldInCurrentHour + ' cookies';
    this.cookiesSoldInformationByHour.push(textContentForCurrentHour);
  }
};

SalmonCookies.prototype.displayMarketSales = function () {
  var salesDisplayArea = document.createElement('div');
  salesDisplayArea.className += 'salesbox';
  document.body.appendChild(salesDisplayArea);

  var heading = document.createElement('h2');
  heading.textContent = this.name;
  salesDisplayArea.appendChild(heading);

  var list = document.createElement('ul');
  salesDisplayArea.appendChild(list);

  for (var i = 0; i < this.cookiesSoldInformationByHour.length; i++) {
    var item = document.createElement('li');
    item.textContent = this.cookiesSoldInformationByHour[i];
    list.appendChild(item);
  }

  // this.cookiesSoldInformationByHour.forEach(function (textForAGivenHour) {
  //   var item = document.createElement('li');
  //   item.textContent = textForAGivenHour;
  //   list.appendChild(item);
  // });


  var total = document.createElement('li');
  total.textContent = 'Total: ' + this.totalCookiesSold + ' cookies';
  list.appendChild(total);
};

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

firstAndPike.displayMarketSales();
airport.displayMarketSales();
centerOfSeattle.displayMarketSales();
capHill.displayMarketSales();
beach.displayMarketSales();