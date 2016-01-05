module.exports = {
    entry: './src/index.ts',

    output: {
        filename: 'build/bundle.js'
    },

    resolve: {
        extensions: ['', '.ts', '.js'],
        modulesDirectories: ['./src', 'node_modules']
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: 'babel-loader?presets[]=es2015!ts-loader', exclude: /node_modules/ }
        ]
    },

    devtool: 'source-map'
}
