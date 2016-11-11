(function(){
    'use strict';

    var root = this;
    var transliteration;

    if (typeof exports !== 'undefined') {
        // we are on the server
        transliteration = exports;
    } else {
        // we are in browser
        transliteration = root.transliteration = {};
    }

    transliteration.crh = { };

    transliteration.crh.fromCyrillic = function(text) {
        return transliterate(text, require('./cyr2crh'));
    };

    transliteration.crh.toCyrillic = function(text) {
        return transliterate(text, require('./crh2cyr'));
    };

    function transliterate(text, reMap) {
        text = " " + text + " ";

        for (var i in reMap ) {
            text = text.replace( reMap[i][0], reMap[i][1] );
        }

        return text.substring(1, text.length-1);
    };
}).call(this);
