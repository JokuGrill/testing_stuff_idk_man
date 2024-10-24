import chai from 'chai';
var except = chai.expect;
import f1 from '../stuff.js';
import f2 from '../stuff.js';

describe('test', () => {
    it('f1 test', () => {
        except(f1(2,1)).to.equal(1);
    })
})

describe('test2', () => {
    it('f2 test', () => {
        except(f1(2,1)).to.equal(1);
    })
})