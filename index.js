module.exports = function () {
    var callback = this.async(),
        parser = require('raml-parser'),
        generator = require('raml-javascript-generator/dist/index');

    parser.loadFile(this.resourcePath).then(
        function (raml) {
            try {
                callback(null, generator.client(raml).files['index.js']);
            }
            catch (e) {
                callback(e);
            }
        },
        callback
    );
};
