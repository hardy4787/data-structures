const obj = {
  amount: 10,
  display: function () {
    for (var i = 0; i <= 10; i++) {
      setTimeout(
        function () {
          console.log(i * this.amount);
        }.bind(this),
        1000
      );
    }
  },
};

obj.display(); // (11) NaN
