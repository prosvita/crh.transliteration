var transliteration;

if (typeof global !== "undefined" && global.transliteration) {
    transliteration = global.transliteration;
} else {
    global.transliteration = transliteration = {};
}

transliteration.crh = require('./transliteration.crh').crh;
transliteration.crh.version = require('../package').version;
