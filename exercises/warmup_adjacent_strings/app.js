let adj = function (arr) {
    let maxLength = 0
    let maxArrCombo = []
      for (let i = 1; i < arr.length - 1; i++) {
          if (arr[i-1].length + arr[i].length + arr[i+1].length > maxLength) {
            maxLength = (arr[i-1].length + arr[i].length + arr[i+1].length);
            maxArrCombo = [arr[i-1], arr[i], arr[i+1]];
          }
      }
      return maxArrCombo
  }
  
  module.exports = adj;

