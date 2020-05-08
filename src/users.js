function set(_) {
    return function() {
        console.log('setting user')
        console.log('accept params')
        console.log(_)
    }
}

function get(_) {
    return function() {
        console.log('getting user')
        console.log('accept params')
        console.log(_)
    }
}

module.exports = function() {
    return { 
        set: set(this), 
        get: get(this) 
    }
}