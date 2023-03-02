module.exports = ([
    [ /“/g, "\"" ],
    [ /”/g, "\"" ],
    // Taken from https://uk.wikipedia.org/wiki/%D0%9A%D1%80%D0%B8%D0%BC%D1%81%D1%8C%D0%BA%D0%BE%D1%82%D0%B0%D1%82%D0%B0%D1%80%D1%81%D1%8C%D0%BA%D0%B0_%D0%B0%D0%B1%D0%B5%D1%82%D0%BA%D0%B0#%D0%9F%D0%B5%D1%80%D1%88%D0%B0_%D0%BB%D0%B0%D1%82%D0%B8%D0%BD%D0%B8%D1%86%D1%8F#
    // Exchange c and ç using placehholder character 𑑛
    [ /C/g, "𑑛"],
    [ /Ç/g, "C"],
    [ /𑑛/g, "Ç"],
    [ /c/g, "𑑛"],
    [ /ç/g, "c"],
    [ /𑑛/g, "ç"],
    // Exchange j, y, ü, and ƶ
    [ /J/g, "Ƶ"],
    [ /Y/g, "J"],
    [ /Ü/g, "Y"],
    [ /j/g, "ƶ"],
    [ /y/g, "j"],
    [ /ü/g, "y"],
    // Change ı to ь
    [ /I/g, "Ь"],
    [ /ı/g, "ь"],
    // Change ğ to ƣ
    [ /Ğ/g, "Ƣ"],
    [ /ğ/g, "ƣ"],
    // Change ñ to ꞑ
    [ /Ñ/g, "Ꞑ"],
    [ /ñ/g, "ꞑ"],
    // Change ö to ө
    [ /Ö/g, "Ɵ"],
    [ /ö/g, "ө"]
    // Change h to x (requires firther rules...)
]);