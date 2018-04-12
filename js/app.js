'use strict';

var firstAndPikeShop = {
  name: '1st and Pike',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiePerSale: 6.3,
  totalCookiesSold: 0,
  cookiesSoldInformationByHour: [],
  buildMarketSales: function() {
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

      var textContentForCurrentHour =  hourNumber + morningEvening + numberOfCookiesSoldInCurrentHour + ' cookies';
      this.cookiesSoldInformationByHour.push(textContentForCurrentHour);
    }
  },
  displayMarketSales: function() {
    var salesDisplayArea = document.createElement('div');
    salesDisplayArea.className += 'salesbox';
    document.body.appendChild(salesDisplayArea);

    var heading = document.createElement('h2');
    heading.textContent = this.name;
    salesDisplayArea.appendChild(heading);

    var list = document.createElement('u1');
    salesDisplayArea.appendChild(list);

    this.cookiesSoldInformationByHour.forEach(function(textForAGivenHour) {
      var item = document.createElement('li');
      item.textContent = textForAGivenHour;
      list.appendChild(item);
    });

    var total = document.createElement('li');

    total.textContent = 'Total: ' + this.totalCookiesSold + ' cookies';
    list.appendChild(total);
  }
};

firstAndPikeShop.buildMarketSales();
firstAndPikeShop.displayMarketSales();

var airport = {
  name: 'SeaTac Airport',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiePerSale: 1.2,
  totalCookiesSold: 0,
  cookiesSoldInformationByHour: [],
  buildMarketSales: function() {
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

      var textContentForCurrentHour =  hourNumber + morningEvening + numberOfCookiesSoldInCurrentHour + ' cookies';
      this.cookiesSoldInformationByHour.push(textContentForCurrentHour);
    }
  },
  displayMarketSales: function() {
    var salesDisplayArea = document.createElement('div');
    salesDisplayArea.className += 'salesbox';
    document.body.appendChild(salesDisplayArea);

    var heading = document.createElement('h2');
    heading.textContent = this.name;
    salesDisplayArea.appendChild(heading);

    var list = document.createElement('u1');
    salesDisplayArea.appendChild(list);

    this.cookiesSoldInformationByHour.forEach(function(textForAGivenHour) {
      var item = document.createElement('li');
      item.textContent = textForAGivenHour;
      list.appendChild(item);
    });

    var total = document.createElement('li');

    total.textContent = 'Total: ' + this.totalCookiesSold + ' cookies';
    list.appendChild(total);
  }
};

airport.buildMarketSales();
airport.displayMarketSales();

var centerOfSeattle = {
  name: 'Seattle Center',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiePerSale: 3.7,
  totalCookiesSold: 0,
  cookiesSoldInformationByHour: [],
  buildMarketSales: function() {
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

      var textContentForCurrentHour =  hourNumber + morningEvening + numberOfCookiesSoldInCurrentHour + ' cookies';
      this.cookiesSoldInformationByHour.push(textContentForCurrentHour);
    }
  },
  displayMarketSales: function() {
    var salesDisplayArea = document.createElement('div');
    salesDisplayArea.className += 'salesbox';
    document.body.appendChild(salesDisplayArea);

    var heading = document.createElement('h2');
    heading.textContent = this.name;
    salesDisplayArea.appendChild(heading);

    var list = document.createElement('u1');
    salesDisplayArea.appendChild(list);

    this.cookiesSoldInformationByHour.forEach(function(textForAGivenHour) {
      var item = document.createElement('li');
      item.textContent = textForAGivenHour;
      list.appendChild(item);
    });

    var total = document.createElement('li');

    total.textContent = 'Total: ' + this.totalCookiesSold + ' cookies';
    list.appendChild(total);
  }
};

centerOfSeattle.buildMarketSales();
centerOfSeattle.displayMarketSales();

var capHill = {
  name: 'Capitol Hill',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiePerSale: 2.3,
  totalCookiesSold: 0,
  cookiesSoldInformationByHour: [],
  buildMarketSales: function() {
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

      var textContentForCurrentHour =  hourNumber + morningEvening + numberOfCookiesSoldInCurrentHour + ' cookies';
      this.cookiesSoldInformationByHour.push(textContentForCurrentHour);
    }
  },
  displayMarketSales: function() {
    var salesDisplayArea = document.createElement('div');
    salesDisplayArea.className += 'salesbox';
    document.body.appendChild(salesDisplayArea);

    var heading = document.createElement('h2');
    heading.textContent = this.name;
    salesDisplayArea.appendChild(heading);

    var list = document.createElement('u1');
    salesDisplayArea.appendChild(list);

    this.cookiesSoldInformationByHour.forEach(function(textForAGivenHour) {
      var item = document.createElement('li');
      item.textContent = textForAGivenHour;
      list.appendChild(item);
    });

    var total = document.createElement('li');

    total.textContent = 'Total: ' + this.totalCookiesSold + ' cookies';
    list.appendChild(total);
  }
};

capHill.buildMarketSales();
capHill.displayMarketSales();

var beach = {
  name: 'Alki',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiePerSale: 4.6,
  totalCookiesSold: 0,
  cookiesSoldInformationByHour: [],
  buildMarketSales: function() {
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

      var textContentForCurrentHour =  hourNumber + morningEvening + numberOfCookiesSoldInCurrentHour + ' cookies';
      this.cookiesSoldInformationByHour.push(textContentForCurrentHour);
    }
  },
  displayMarketSales: function() {
    var salesDisplayArea = document.createElement('div');
    salesDisplayArea.className += 'salesbox';
    document.body.appendChild(salesDisplayArea);

    var heading = document.createElement('h2');
    heading.textContent = this.name;
    salesDisplayArea.appendChild(heading);

    var list = document.createElement('u1');
    salesDisplayArea.appendChild(list);

    this.cookiesSoldInformationByHour.forEach(function(textForAGivenHour) {
      var item = document.createElement('li');
      item.textContent = textForAGivenHour;
      list.appendChild(item);
    });

    var total = document.createElement('li');

    total.textContent = 'Total: ' + this.totalCookiesSold + ' cookies';
    list.appendChild(total);
  }
};

beach.buildMarketSales();
beach.displayMarketSales();

