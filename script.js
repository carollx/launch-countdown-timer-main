function handleTickInit(tick) {
  var deadline = new Date(Date.parse(new Date()) + (14 * 24 * 60 * 60 * 1000) + 580);

  Tick.count.down(deadline).onupdate = function (value) {
    tick.value = value;
  };

}