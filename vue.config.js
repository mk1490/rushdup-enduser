module.exports = {
    lintOnSave: false, transpileDependencies: ['vuetify'], configureWebpack: {
        'resolve': {
            fallback: {
                'path': require.resolve("path-browserify")
            }
        }
        // return config;
    }
}
