require('ts-node').register({ transpileOnly: true })
require('tsconfig-paths/register');
module.exports = require('../main/config/wdio.conf');
