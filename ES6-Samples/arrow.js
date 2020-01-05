// traditional way

var getLine = function(name) {
  return `This is learning ${name} the easy way !`;
};

var getDesc = function(name, title) {
  return `This is learning ${name} the easy way - topic ${title} !`;
};

console.log(getLine("React"));
console.log(getDesc("React", "Arrow Functtion"));

// arrow functions ()=> {}

var getLineAr = name => `This is learning ${name} the easy way !`;
var getDescAr = (name, title) => {
  `This is learning ${name} the easy way - topic ${title} !`;
};

console.log(getLineAr("React"));
console.log(getDescAr("React", "Arrow Function"));
