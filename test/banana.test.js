import chai from 'chai';
var except = chai.expect;
import banana from '../banana.js';

describe('test', () => {
    it('except to add', () => {
        except(banana(1,1)).to.equal(1);
    })
})