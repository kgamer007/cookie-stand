// 'use strict';

// var firstAndPikeShop = {
//   name: '1st and Pike',
//   minHourlyCustomers: 23,
//   maxHourlyCustomers: 65,
//   avgCookiePerSale: 6.3,
//   openHour: 6,
//   closeHour: 20,
//   cookiesSold: [],
//   makeSales: function () {
//     var square = document.createElement('span');
//     square.className += 'salesbox';
//     document.body.appendChild(square);

//     var heading = document.createElement('h2');
//     heading.textContent = this.name;
//     square.appendChild(heading);

//     var list = document.createElement('u1');
//     square.appendChild(list);

//     var hourNumber;
//     var morningEvening;
//     var ranNum;
//     for (var i = this.openHour; i <= this.closeHour; i++) {
//       var item = document.createElement('li');
//       if (i < 12) {
//         morningEvening = 'am: ';
//       } else {
//         morningEvening = 'pm: ';
//       }
//       if (i > 12) {
//         hourNumber = i - 12;
//       } else if {
//         hourNumber = i;
//       }
//       ranNum = Math.round(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);

//       total.appendChild

//       this.cookiesSold.push(ranNum);

//       item.textContent = hourNumber + morningEvening + ranNum + ' cookies';
//       list.appendChild(item);
//   }
// };

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


// var totalNum = 0;
// var total = document.createElement('li');
// for (var i this.cookiesSold) {
//   totalNum += i;
// }
// total.textContent = 'Total: ' + totalNum + ' cookies';
// list.appendChild(total);
// }
// };







