// array.forEach();
// array.map();
// array.reduce();
// array.filter();

var arr = [
  {
    "day": "Sunday"
  },
  {
    "day": "Monday"
  },
  {
    "day": "Tuesday"
  },
  {
    "day": "Wednesday"
  },
  {
    "day": "Thursday"
  },
  {
    "day": "Friday"
  },
  {
    "day": "Saturday"
  }
];

arr.forEach(function(dayObj){
  console.log(dayObj.day);
});

var mappedArr = arr.map(function(dayObj){
  var name = dayObj.day;
  dayObj.abbr = name.substring(0,3);

  return dayObj;
});

var filteredArray = arr.filter(function(dayObj) {
  return dayObj.day.charAt(0) === 'T';
});

var myValue = arr.reduce(function(a, b){
  if (a.day.length > b.day.length) {
    return a;
  } else {
    return b;
  }
});

var myValue2 = arr.reduce(function(a, b){
  if (typeof a === "string") {
    if (a.length > b.day.length) {
      return a;
    } else {
      return b.day;
    }
  } else {
    if (a.day.length > b.day.length) {
      return a.day;
    } else {
      return b.day;
    }
  }
});
