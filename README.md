# crh.transliteration

[![NPM version](https://img.shields.io/npm/v/transliteration.crh.svg?style=flat)](https://www.npmjs.org/package/transliteration.crh)
[![Build Status](https://travis-ci.org/prosvita/crh.transliteration.svg?branch=master)](https://travis-ci.org/prosvita/crh.transliteration)
[![Coverage Status](https://coveralls.io/repos/github/prosvita/crh.transliteration/badge.svg?branch=master)](https://coveralls.io/github/prosvita/crh.transliteration?branch=master)

JavaScript library and tool for transliteration cyrillic Crimean Tatar words to latin and back.
Based on [transliterator](http://medeniye.org/node/530) developed by Alexander Goryainov, 2006-2009.

Library can be used on node.js platform.

Published as npm package - [transliteration.crh](https://www.npmjs.com/package/transliteration.crh).

## Install in Node.js

```bash
npm install transliteration.crh --save
```

```js
var transliteration=require('transliteration.crh');
transliteration.crh.fromCyrillic('Мерхаба!'); // Merhaba!
transliteration.crh.toCyrillic('Merhaba!'); // Мерхаба!
```

## Download the library and use in browser

```bash
# Install bower if not already installed
# npm install bower -g
bower install transliteration.crh
```

```html
<html>
<head>
  <script src="bower_components/transliteration.crh/dist/transliteration.crh.min.js"></script>
</head>
<body>
  <script>
    console.log(transliteration.crh.fromCyrillic('Мерхаба!')); // Merhaba!
    console.log(transliteration.crh.toCyrillic('Merhaba!')); // Мерхаба!
  </script>
</body>
</html>
```

## Install command line tool globally

```
npm install transliteration.crh -g
crh --help

  Usage: crh <options> <sourceFile> [targetFile]

  Options:

    -h, --help           output usage information
    -V, --version        output the version number
    -c, --to-cyrillic    Convert to Cyrillic from Latin
    -l, --from-cyrillic  Convert to Latin from Cyrillic

```
