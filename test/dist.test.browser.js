/* global expect, transliteration */
describe('transliteration.crh', function() {
    it('fromCyrillic(), short crh-RU to crh', function() {
        expect(transliteration.crh.fromCyrillic('Мерхаба!')).to.equal('Merhaba!');
    });

    it('toCyrillic(), short crh to crh-RU', function() {
        expect(transliteration.crh.toCyrillic('Merhaba!')).to.equal('Мерхаба!');
    });
});
