module.exports = {
    lintOnSave: false,
    transpileDependencies: ['vuetify'],
    configureWebpack: {
        'resolve': {
            fallback: {
                'path': require.resolve("path-browserify")
            }
        },
        // return config;
        // entry: '@/assets/js/main.min.js'
    },
    pages: {
        app: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            excludeChunks: ['silent-renew']
        },
        silentrenew: {
            entry: 'src/silent-renew.js',
            template: 'public/silent-renew.html',
            filename: 'silent-renew.html',
            excludeChunks: ['app']
        }
    },
}
