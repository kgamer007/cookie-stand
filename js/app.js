'use strict';

// var location = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
// var minCust = [23, 3, 11, 20, 2];
// var maxCust = [65, 24, 38, 38, 16];
// var avgCookieSale = [6.3, 1.2, 3.7, 2.3,];



var lowestCustomer = {
  minimumPeople: [23, 3, 11, 20, 2],
  renderCustomer: function () {
    // access the parent element from the DOM
    var ulElement = document.getElementById('low cookie customer');
    var location = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
    for (var i = 0; i < location.length; i++) {
      // 1. create element
      var listItemElement = document.createElement('li');

      // 2. give it content
      listItemElement.textContent = location[i] + ': ' + this.minimumPeople[i];

      // 3. append it to the DOM
      // parentElement.appendChild(childElement);
      ulElement.appendChild(listItemElement);
    }
  }
};

var highestCustomer = {
  maximumPeople: [65, 24, 38, 38, 16],
  renderCustomer: function () {
    // access the parent element from the DOM
    var ulElement = document.getElementById('maximum customer');

    for (var i = 0; i < this.maximumPeople; i++) {
      // 1. create element
      var listItemElement = document.createElement('li');

      // 2. give it content
      listItemElement.textContent = location[i] + ': ' + this.maximumPeople.miles[i];

      // 3. append it to the DOM
      // parentElement.appendChild(childElement);
      ulElement.appendChild(listItemElement);
    }
  }
};


lowestCustomer.renderCustomer();
highestCustomer.renderCustomer();