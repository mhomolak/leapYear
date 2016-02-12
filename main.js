module.exports = {
  leapYear: function () {
    if(leapYear % 100 === 0 && leapYear % 400 !== 0) {
      return false
    }
    if(leapYear % 4 === 0) {
      return true
    }
  }
}
