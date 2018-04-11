'use strict';

var firstAndPikeShop = {
  name: '1st and Pike',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiePerSale: 6.3,
  openHour: 6,
  closeHour: 20,
  cookiesSold: [],

  makeSales: function () {
    var square = document.createElement('span');
    square.className += 'salesbox';
    document.body.appendChild(square);

    var heading = document.createElement('h2');
    heading.textContent = this.name;
    square.appendChild(heading);

    var list = document.createElement('u1');
    square.appendChild(list);

    var hourNumber;
    var morningEvening;
    var ranNum;
    for (var i = this.openHour; i <= this.closeHour; i++) {
      var item = document.createElement('li');
      if (i < 12) {
        morningEvening = 'am: ';
      } else {
        morningEvening = 'pm: ';
      }
      if (i > 12) {
        hourNumber = i - 12;
      } else {
        hourNumber = i;
      }
    ranNum = Math.round(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);

    this.cookiesSold.push(ranNum);

    item.textContent = hourNumber + morningEvening + ranNum + ' cookies';
    list.appendChild(item);
  }
};
var totalNum = 0;
var total = document.createElement('li');
for (i in this.cookiesSold) {
  totalNum += i;
}
total.textContent = 'Total: ' + totalNum + ' cookies';
list.appendChild(total);
}
};