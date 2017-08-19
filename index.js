/**
 * @file mofron-font-google/index.js
 * @author simpart
 */
mofron.font.Google = class extends mofron.Font {
    constructor (fnt, pth) {
        try {
            super(fnt, pth);
            this.name('google');

            /* check parameter */
            var _pth = (pth === undefined) ? null : pth;
            if ('string' !== (typeof fnt)) {
                throw new Error('invalid parameter');
            }

            mofron.func.addHeadConts({
                tag  : 'link',
                attr : { href : pth,
                         rel  : 'stylesheet' }
            });

        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    setFace (fnt, pth) {}
}
module.exports = mofron.font.Google;
