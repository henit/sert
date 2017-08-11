/* eslint-disable max-len */
import { expect } from 'chai';
import Sert from '../Sert';

describe('Sert', () => {

    // Primitives

    describe('.string', () => {
        it('should throw error for invalid subjects', () => {
            expect(() => Sert.string(null)).to.throw(Error);
            expect(() => Sert.string(undefined)).to.throw(Error);
            expect(() => Sert.string(42)).to.throw(Error);
            expect(() => Sert.string({})).to.throw(Error);
            expect(() => Sert.string([])).to.throw(Error);
        });

        it('should throw error object with given props', () => {
            try {
                Sert.string(42, { message: 'Foo bar', status: 418 });
            } catch (e) {
                expect(e).to.be.instanceOf(Error);
                expect(e.message).to.equal('Foo bar');
                expect(e.status).to.equal(418);
            }
        });

        it('should pass valid subjects', () => {
            Sert.string('');
            Sert.string('0');
            Sert.string('abc');
            Sert.string('null');
        });
    });

    describe('.number', () => {
        it('should throw error for invalid subjects', () => {
            expect(() => Sert.number(null)).to.throw(Error);
            expect(() => Sert.number(undefined)).to.throw(Error);
            expect(() => Sert.number('abc')).to.throw(Error);
            expect(() => Sert.number({})).to.throw(Error);
            expect(() => Sert.number([])).to.throw(Error);
        });

        it('should throw error object with given props', () => {
            try {
                Sert.number('abc', { message: 'Foo bar', status: 418 });
            } catch (e) {
                expect(e).to.be.instanceOf(Error);
                expect(e.message).to.equal('Foo bar');
                expect(e.status).to.equal(418);
            }
        });

        it('should pass valid subjects', () => {
            Sert.number(42);
        });
    });

    describe('.object', () => {
        it('should throw error for invalid subjects', () => {
            expect(() => Sert.object(null)).to.throw(Error);
            expect(() => Sert.object(undefined)).to.throw(Error);
            expect(() => Sert.object(42)).to.throw(Error);
            expect(() => Sert.object('abc')).to.throw(Error);
            expect(() => Sert.object([])).to.throw(Error);
        });

        it('should throw error object with given props', () => {
            try {
                Sert.object(42, { message: 'Foo bar', status: 418 });
            } catch (e) {
                expect(e).to.be.instanceOf(Error);
                expect(e.message).to.equal('Foo bar');
                expect(e.status).to.equal(418);
            }
        });

        it('should pass valid subjects', () => {
            Sert.object({});
        });
    });

    describe('.func', () => {
        it('should throw error for invalid subjects', () => {
            expect(() => Sert.func(null)).to.throw(Error);
            expect(() => Sert.func(undefined)).to.throw(Error);
            expect(() => Sert.func(42)).to.throw(Error);
            expect(() => Sert.func('abc')).to.throw(Error);
            expect(() => Sert.func([])).to.throw(Error);
            expect(() => Sert.func({})).to.throw(Error);
        });

        it('should throw error object with given props', () => {
            try {
                Sert.func(42, { message: 'Foo bar', status: 418 });
            } catch (e) {
                expect(e).to.be.instanceOf(Error);
                expect(e.message).to.equal('Foo bar');
                expect(e.status).to.equal(418);
            }
        });

        it('should pass valid subjects', () => {
            Sert.func(function() {});
            Sert.func(() => null);
        });
    });

    describe('.array', () => {
        it('should throw error for invalid subjects', () => {
            expect(() => Sert.array(null)).to.throw(Error);
            expect(() => Sert.array(undefined)).to.throw(Error);
            expect(() => Sert.array(42)).to.throw(Error);
            expect(() => Sert.array({})).to.throw(Error);
            expect(() => Sert.array('abc')).to.throw(Error);
        });

        it('should throw error object with given props', () => {
            try {
                Sert.array(42, { message: 'Foo bar', status: 418 });
            } catch (e) {
                expect(e).to.be.instanceOf(Error);
                expect(e.message).to.equal('Foo bar');
                expect(e.status).to.equal(418);
            }
        });

        it('should pass valid subjects', () => {
            Sert.array([]);
        });
    });

    describe('.bool', () => {
        it('should throw error for invalid subjects', () => {
            expect(() => Sert.bool(null)).to.throw(Error);
            expect(() => Sert.bool(undefined)).to.throw(Error);
            expect(() => Sert.bool(42)).to.throw(Error);
            expect(() => Sert.bool('abc')).to.throw(Error);
            expect(() => Sert.bool({})).to.throw(Error);
            expect(() => Sert.bool([])).to.throw(Error);
        });

        it('should throw error object with given props', () => {
            try {
                Sert.bool(42, { message: 'Foo bar', status: 418 });
            } catch (e) {
                expect(e).to.be.instanceOf(Error);
                expect(e.message).to.equal('Foo bar');
                expect(e.status).to.equal(418);
            }
        });

        it('should pass valid subjects', () => {
            Sert.bool(true);
            Sert.bool(false);
        });
    });

    // Comparison

    describe('.equal', () => {
        it('should throw error for invalid subjects', () => {
            expect(() => Sert.equal(1, 2)).to.throw(Error);
            expect(() => Sert.equal('a', 'b')).to.throw(Error);
            expect(() => Sert.equal(0, '0')).to.throw(Error);
            expect(() => Sert.equal('', null)).to.throw(Error);
            expect(() => Sert.equal({}, {})).to.throw(Error);
            expect(() => Sert.equal([], [])).to.throw(Error);
            expect(() => Sert.equal(null, 'null')).to.throw(Error);
            expect(() => Sert.equal(undefined, null)).to.throw(Error);
        });

        it('should throw error object with given props', () => {
            try {
                Sert.equal(42, 43, { message: 'Foo bar', status: 418 });
            } catch (e) {
                expect(e).to.be.instanceOf(Error);
                expect(e.message).to.equal('Foo bar');
                expect(e.status).to.equal(418);
            }
        });

        it('should pass valid subjects', () => {
            Sert.equal(42, 42);
            Sert.equal('abc', 'abc');
            Sert.equal(true, true);
            Sert.equal(false, false);
            Sert.equal(undefined, undefined);
            Sert.equal(null, null);
            const obj = {};
            Sert.equal(obj, obj);
        });
    });

    describe('.in', () => {
        it('should throw error for elements not in list', () => {
            expect(() => Sert.in([1, 2, 3], 4)).to.throw(Error);
            expect(() => Sert.in(['a', 'b'], 'c')).to.throw(Error);
            expect(() => Sert.in(['1', '2'], 2)).to.throw(Error);
        });

        it('should throw error object with given props', () => {
            try {
                Sert.in([1, 2], 3, { message: 'Foo bar', status: 418 });
            } catch (e) {
                expect(e).to.be.instanceOf(Error);
                expect(e.message).to.equal('Foo bar');
                expect(e.status).to.equal(418);
            }
        });

        it('should pass values in list', () => {
            Sert.in([1, 2], 2);
            Sert.in(['a', 'b'], 'a');
        });
    });

    describe('.notIn', () => {
        it('should throw error for elements not in list', () => {
            expect(() => Sert.notIn([1, 2, 3], 3)).to.throw(Error);
            expect(() => Sert.notIn(['a', 'b'], 'b')).to.throw(Error);
        });

        it('should throw error object with given props', () => {
            try {
                Sert.notIn([1, 2], 2, { message: 'Foo bar', status: 418 });
            } catch (e) {
                expect(e).to.be.instanceOf(Error);
                expect(e.message).to.equal('Foo bar');
                expect(e.status).to.equal(418);
            }
        });

        it('should pass values in list', () => {
            Sert.notIn([1, 2], 3);
            Sert.notIn(['1', '2'], 2);
            Sert.notIn(['a', 'b'], 'c');
        });
    });

    describe('.empty', () => {
        it('should throw error for elements not in list', () => {
            expect(() => Sert.empty({ foo: 'bar' })).to.throw(Error);
            expect(() => Sert.empty([0])).to.throw(Error);
            expect(() => Sert.empty(42)).to.throw(Error);
        });

        it('should throw error object with given props', () => {
            try {
                Sert.empty(42, { message: 'Foo bar', status: 418 });
            } catch (e) {
                expect(e).to.be.instanceOf(Error);
                expect(e.message).to.equal('Foo bar');
                expect(e.status).to.equal(418);
            }
        });

        it('should pass values in list', () => {
            Sert.empty({});
            Sert.empty([]);
            Sert.empty(undefined);
            Sert.empty(null);
        });
    });

    describe('.notEmpty', () => {
        it('should throw error for elements not in list', () => {
            expect(() => Sert.notEmpty({})).to.throw(Error);
            expect(() => Sert.notEmpty([])).to.throw(Error);
            expect(() => Sert.notEmpty(undefined)).to.throw(Error);
            expect(() => Sert.notEmpty(null)).to.throw(Error);
        });

        it('should throw error object with given props', () => {
            try {
                Sert.notEmpty([], { message: 'Foo bar', status: 418 });
            } catch (e) {
                expect(e).to.be.instanceOf(Error);
                expect(e.message).to.equal('Foo bar');
                expect(e.status).to.equal(418);
            }
        });

        it('should pass values in list', () => {
            Sert.notEmpty({ bar: 'FOO' });
            Sert.notEmpty(['a', 'b', 'c']);
            Sert.notEmpty(42);
            Sert.notEmpty('abc');
        });
    });

});
