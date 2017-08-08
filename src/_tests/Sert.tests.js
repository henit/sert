/* eslint-disable max-len */
import Sert from '../Sert';
import { expect } from 'chai';

describe('Sert', () => {

    // Primitives

    describe('.string()', () => {
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

    describe('.number()', () => {
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

    describe('.object()', () => {
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

    describe('.func()', () => {
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

    describe('.array()', () => {
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

    describe('.bool()', () => {
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

    describe('.equal()', () => {
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

});
