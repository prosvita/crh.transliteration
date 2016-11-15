const assert = require('chai').assert;
const exec = require('sync-exec');
const fs = require('fs');
const textLat = fs.readFileSync('test/text.crh.md', 'utf8');
const textCyr = fs.readFileSync('test/text.crh-RU.md', 'utf8');

describe('run cli', () => {
    it('without options', () => {
        assert.equal(exec('./bin/crh').stderr, '[Error: Must select one of the options: --to-cyrillic, --from-cyrillic]\n');
    });

    it('--to-cyrillic to stdout', () => {
        assert.equal(exec('./bin/crh -c test/text.crh.md').stdout, textCyr);
    });

    it('--to-cyrillic without file', () => {
        assert.equal(exec('./bin/crh -c').stderr, '[Error: Can\'t select source file]\n');
    });

    it('--from-cyrillic to file', () => {
        exec('./bin/crh -l test/text.crh-RU.md test.crh.md~');
        assert.equal(fs.readFileSync('test.crh.md~', 'utf8'), textLat);
        fs.unlinkSync('test.crh.md~');
    });

    it('--from-cyrillic from wrong file', () => {
        assert.equal(exec('./bin/crh -l wrong.file').stderr, '[Error: ENOENT: no such file or directory, open \'wrong.file\']\n');
    });
});
