import chai from 'chai';
var except = chai.expect;
import add from '../add.js';

describe('test', () => {
    it('except to add', () => {
        except(add(1,2)).to.equal(3);
    })
})