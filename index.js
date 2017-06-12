'use strict'

module.exports = function vsReporter(errorsCollection) {
    var errorCount = 0;

    if (!errorsCollection.length) {
        return;
    }

    errorsCollection.forEach(function eachErrorFile(errors) {
        if (!errors.isEmpty()) {
            errors.getErrorList().forEach(function eachError(error) {
                errorCount++;
                console.log(errors.getFilename() + '(' + error.line + ',' +
                error.column + ')' + ' : ' + 'warning : ' + 'JSCS: ' + error.message);
            });
        }
    });
};
