module.exports = function() {
    console.log(this.config)
    console.log(this.file())

    process.exit()
}