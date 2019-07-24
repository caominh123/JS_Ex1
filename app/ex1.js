let _ = require("lodash");

exports.matchedWords = function(a) {
  let b = _.split(a, " ");
  let c = _.clone(b);
  for (let x of b) {
    let i = 0,
      f = false;
    while (i < x.length - 1) {
      if (
        (_.toNumber(x[i]) >= 0 && _.isNaN(_.toNumber(x[i + 1]))) ||
        (_.isNaN(_.toNumber(x[i])) && _.toNumber(x[i + 1]) >= 0)
      ) {
        f = true;
        break;
      } else {
        i++;
      }
    }
    if (f == false) _.pull(c, x);
  }

  return c;
};

exports.variation = function(c) {
  let d = [];
  for (let x of c) {
    d.push(_.kebabCase(x));
  }
  return d;
};
