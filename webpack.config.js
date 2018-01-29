const avatarsWebpackSprites = require('@dicebear/avatars-webpack-config');

let config = avatarsWebpackSprites('male');

module.exports = [config.node, config.web.dev, config.web.prod];
