'use strict';

const program = require('commander');
const fs = require('fs');
const version = require('../package').version;
const transliteration = require('./transliteration.crh');

module.exports.run = (argv) => {
    let sourceFile;

    program
        .version(version)
        .usage('<options> <sourceFile> [targetFile]')
        .option('-c, --to-cyrillic', 'Convert to Cyrillic from Latin')
        .option('-l, --from-cyrillic', 'Convert to Latin from Cyrillic')
        .option('-f, --to-first-latin', 'Convert to First Latin from Latin')
        .option('-i, --from-first-latin', 'Convert to Latin from First Latin')
        .arguments('<sourceFile> [targetFile]')
        .action((source, target) => {
            sourceFile = source;
            if (typeof target !== 'undefined') {
                var access = fs.createWriteStream(target, {flags: 'w'});
                process.stdout.write = access.write.bind(access);
            }
        });

    program.parse(argv);

    if ((program.toCyrillic | 0) + (program.fromCyrillic | 0) + (program.toFirstLatin | 0) + (program.fromFirstLatin | 0)!== 1) {
        console.error(new Error('Must select one of the options: --to-cyrillic, --from-cyrillic, --to-first-latin, --from-first-latin').message);
        process.exit(1);
    }

    if (typeof sourceFile === 'undefined') {
        console.error(new Error('Can\'t select source file').message);
        process.exit(1);
    }

    fs.readFile(sourceFile, 'utf8', (err, text) => {
        if (err) {
            console.error(new Error(err.message).message);
            process.exit(err.errno);
        }

        if (program.toCyrillic) {
            process.stdout.write(transliteration.crh.toCyrillic(text));
        } else if (program.fromCyrillic) {
            process.stdout.write(transliteration.crh.fromCyrillic(text));
        } else if (program.toFirstLatin) {
            process.stdout.write(transliteration.crh.toFirstLatin(text));
        } else if (program.fromFirstLatin) {
            process.stdout.write(transliteration.crh.fromFirstLatin(text));
        }
    });
};
