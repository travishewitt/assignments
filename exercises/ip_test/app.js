let ipTest = function (str) {
    let testArr = str.split(".").filter((item)=>{
        return item > -1 && item < 256
    })
  return testArr.length === 4
}

module.exports = ipTest