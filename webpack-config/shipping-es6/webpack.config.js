module.exports = (env, args) => [
    require('./webpack.es5.config')(env, args),
    require('./webpack.es6.config')(env, args)
]