const path = require('path');

const paths = {
    // Config files
    config: path.join(__dirname, '../config'),

    // client source files
    client: path.join(__dirname, '../client'),

    // server source files
    server: path.join(__dirname, '../client'),

    // server build files
    build: path.join(__dirname, '../build'),

    // client build files
    dist: path.join(__dirname, '../dist'),

    // Static files that get copied to build folder
    public: path.join(__dirname, '../public')
};

module.exports = paths;
