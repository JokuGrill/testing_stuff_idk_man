import chai from 'chai';
var except = chai.expect;
import banana from '../banana.js';

describe('testaaaa', () => {
    it('except to add', () => {
        except(banana(1,1)).to.equal(1);
    })
})