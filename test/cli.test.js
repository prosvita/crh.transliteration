const assert = require('chai').assert;
const exec = require('child_process').execSync;
const spawn = require('child_process').spawnSync;
const fs = require('fs');
const textLat = fs.readFileSync('test/text.crh.md', 'utf8');
const textCyr = fs.readFileSync('test/text.crh-RU.md', 'utf8');

describe('run cli', () => {
    it('without options', () => {
        assert.equal(
            spawn('./bin/crh', [], {encoding: 'utf8'}).stderr,
            'Must select one of the options: --to-cyrillic, --from-cyrillic, --to-first-latin, --from-first-latin\n');
    });

    it('more than one action', () => {
        assert.equal(
            spawn('./bin/crh', [ '-c', '-l' ], {encoding: 'utf8'}).stderr,
            'Must select one of the options: --to-cyrillic, --from-cyrillic, --to-first-latin, --from-first-latin\n');
    });

    it('--to-cyrillic to stdout', () => {
        assert.equal(
            spawn('./bin/crh', [ '-c', 'test/text.crh.md' ], {encoding: 'utf8'}).stdout,
            textCyr);
    });

    it('--to-cyrillic without file', () => {
        assert.equal(
            spawn('./bin/crh', ['-c'], {encoding: 'utf8'}).stderr,
            'Can\'t select source file\n');
    });

    it('--from-cyrillic to file', () => {
        exec('./bin/crh -l test/text.crh-RU.md test.crh.md~');
        assert.equal(fs.readFileSync('test.crh.md~', 'utf8'), textLat);
        fs.unlinkSync('test.crh.md~');
    });

    it('--from-cyrillic from wrong file', () => {
        assert.equal(
            spawn('./bin/crh', [ '-l', 'wrong.file' ]).status,
            254);
    });
});
