module.exports.getData = getData;

function getData() {
  const today = new Date();
  const currentDay = today.getDay();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);
  return day;
}

//module可省略
exports.getDay = function () {
  const today = new Date();
  const currentDay = today.getDay();

  let options = {
    weekday: "long"
  };

  let day = today.toLocaleDateString("en-US", options);
  return day;
};

console.log(module.exports);
