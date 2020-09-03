const devServerConfig = {
    hot: true,
    inline: true,
    stats: {
        children: false,
        maxModules: 0,
    },
    proxy: {
        // proxies for the backend
        "/api": "https://localhost:3001",
        "/uploads": "https://localhost:3001",
        "/ws-api": {
            target: "ws://localhost:3001",
            ws: true,
        },
    },
};

function startFrontendDevServer(port) {
    // require here to prevent prod dependency to webpack
    const webpack = require("webpack");
    const WebpackDevServer = require("webpack-dev-server");
    const config = require("../config/webpack.dev");

    new WebpackDevServer(webpack(config), devServerConfig).listen(port, (err) => {
        if (err) {
            console.log(err);
        }

        console.log("Listening on port " + port);
    });
}

module.exports = startFrontendDevServer;
