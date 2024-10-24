import chai from 'chai';
var except = chai.expect;
import f1 from '../stuff.js';

describe('test1', () => {
    it('f1 test', () => {
        except(f1(2,1)).to.equal(1);
    })
})