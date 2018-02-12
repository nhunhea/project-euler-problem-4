function palindrom() {
var max = 0;
for(var i = 999; i > 99; i--) {
  for(var j = 999; j > 99; j--) {
    var n = i * j;
    var s = '' + n;
    if (s === s.split("").reverse().join("") && n > max) {
      max = n;
    }
  }
}
 return max;
}
//console.log(palindrom());
module.exports = palindrom;