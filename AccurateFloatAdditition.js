//Adds floats together with "precision"
var RoundedAddition = (...args) => {
  let countDecimals = (value) => {
    if (Math.floor(value) === value) return 0;
    let a = value.toString().split(".")[1].length || 0;
    return a;
  }
  let highestDecimalpoint;
  args.forEach(i => {
  let x = countDecimals(i);
    if (highestDecimalpoint == undefined || highestDecimalpoint < x) highestDecimalpoint = x;
  });
 let addedValue = args.reduce((a,b)=>a+b);
  if (addedValue<0) {
      addedValue*=-1;
         return ((addedValue.toFixed(highestDecimalpoint))*-1)
  }
  return (addedValue.toFixed(highestDecimalpoint));
};
console.log(RoundedAddition(1.001, 0.1,-9.3));
