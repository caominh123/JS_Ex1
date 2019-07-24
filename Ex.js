let _ = require('lodash');
let a = "This is a sentence 48ascd with 12 and se789 and lk890kl end";
let b = _.split(a, " ");
let c = _.clone(b);
for (let x of b) {
  let i = 0, f = false;
  while (i < x.length - 1) {
    if ((_.toInteger(x[i]) > 0 && _.toInteger(x[i + 1]) == 0) || (_.toInteger(x[i]) == 0 && _.toInteger(x[i + 1]) > 0)) {
      f = true;
      break;
    } else {
      i++;
    }
  }
  if (f == false)
    _.pull(c, x);
}

console.log(`Matchted words: '${c}'`);
let d = [];
for (let x of c) {

  d.push(_.kebabCase(x));
}
console.log(`Variation with '-' character: '${d}'`);