module.exports = function(obj) {
    return obj === Object(obj) && Object.prototype.toString.call(obj) !== '[object Array]'
}
