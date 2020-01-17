const path = require('path');

module.exports = {
    appBuild: path.resolve(__dirname + '/dist'),
    appBuildLegacy:  path.resolve(__dirname + '/dist/legacy'),
    appBuildModern:  path.resolve(__dirname + '/dist/modern'),
}