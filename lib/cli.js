'use strict';

const program = require('commander');
const fs = require('fs');
const transliteration = require('./transliteration.crh');

module.exports.run = (argv) => {
    let sourceFile;

    program
        .version('0.0.1')
        .usage('<options> <sourceFile> [targetFile]')
        .option('-c, --to-cyrillic', 'Convert to Cyrillic from Latin')
        .option('-l, --from-cyrillic', 'Convert to Latin from Cyrillic')
        .arguments('<sourceFile> [targetFile]')
        .action((source, target) => {
            sourceFile = source;
            if (typeof target !== 'undefined') {
                var access = fs.createWriteStream(target, {flags: 'w'});
                process.stdout.write = access.write.bind(access);
            }
        });

    program.parse(argv);

    if ((program.toCyrillic | 0) + (program.fromCyrillic | 0) !== 1) {
        console.error(new Error('Must select one of the options: --to-cyrillic, --from-cyrillic'));
        process.exit(1);
    }

    if (typeof sourceFile === 'undefined') {
        console.error(new Error('Can\'t select source file'));
        process.exit(1);
    }

    fs.readFile(sourceFile, 'utf8', (err, text) => {
        if (err) {
            console.error(new Error(err.message));
            process.exit(err.errno);
        }

        if (program.toCyrillic) {
            process.stdout.write(transliteration.crh.toCyrillic(text));
        } else if (program.fromCyrillic) {
            process.stdout.write(transliteration.crh.fromCyrillic(text));
        }
    });
};
