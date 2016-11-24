# crh.transliteration

[![NPM version](https://img.shields.io/npm/v/transliteration.crh.svg?style=flat)](https://www.npmjs.org/package/transliteration.crh)
[![Bower](https://img.shields.io/bower/v/transliteration.crh.svg)](https://github.com/prosvita/crh.transliteration)
[![Build Status](https://travis-ci.org/prosvita/crh.transliteration.svg?branch=master)](https://travis-ci.org/prosvita/crh.transliteration)
[![Coverage Status](https://coveralls.io/repos/github/prosvita/crh.transliteration/badge.svg?branch=master)](https://coveralls.io/github/prosvita/crh.transliteration?branch=master)

JavaScript library and tool for transliteration cyrillic Crimean Tatar words to latin and back.
Based on [transliterator](http://medeniye.org/node/530) developed by Alexander Goryainov, 2006-2009.

Library can be used in browser and on node.js platform. Browser version can be found in the dist directory.

Browse the demos on https://prosvita.github.io/crh.transliteration/

## Install in Node.js

```bash
npm install transliteration.crh --save
```

```js
var transliteration=require('transliteration.crh');
transliteration.crh.fromCyrillic('Мерхаба!'); // Merhaba!
transliteration.crh.toCyrillic('Merhaba!'); // Мерхаба!
```

## Use in browser

This module should support all major browsers including IE 7-8.

### bower

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

### Vanilla

```html
<script src="https://prosvita.github.io/crh.transliteration/dist/transliteration.crh.min.js"></script>
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
