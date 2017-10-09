/* eslint-disable max-len */
import test from 'ava';
import Sert from '../Sert';

test('.string throw error for invalid subjects', t => {
    t.throws(() => Sert.string(null));
    t.throws(() => Sert.string(undefined));
    t.throws(() => Sert.string(42));
    t.throws(() => Sert.string({}));
    t.throws(() => Sert.string([]));
});

test('.string throw error object with given props', t => {
    const err = t.throws(() => Sert.string(42, { message: 'Foo bar', status: 418 }));
    t.is(err.message, 'Foo bar');
    t.is(err.status, 418);
});

test('.string pass valid subjects', t => {
    Sert.string('');
    Sert.string('0');
    Sert.string('abc');
    Sert.string('null');
});


test('.number throw error for invalid subjects', t => {
    t.throws(() => Sert.number(null));
    t.throws(() => Sert.number(undefined));
    t.throws(() => Sert.number('abc'));
    t.throws(() => Sert.number({}));
    t.throws(() => Sert.number([]));
});

test('.number throw error object with given props', t => {
    const err = t.throws(() => Sert.number('abc', { message: 'Foo bar', status: 418 }));
    t.is(err.message, 'Foo bar');
    t.is(err.status, 418);
});

test('.number pass valid subjects', () => {
    Sert.number(42);
});


test('.object throw error for invalid subjects', t => {
    t.throws(() => Sert.object(null));
    t.throws(() => Sert.object(undefined));
    t.throws(() => Sert.object(42));
    t.throws(() => Sert.object('abc'));
    t.throws(() => Sert.object([]));
});

test('.object throw error object with given props', t => {
    const err = t.throws(() => Sert.object(42, { message: 'Foo bar', status: 418 }));
    t.is(err.message, 'Foo bar');
    t.is(err.status, 418);
});

test('.object pass valid subjects', t => {
    Sert.object({});
});


test('.func throw error for invalid subjects', t => {
    t.throws(() => Sert.func(null));
    t.throws(() => Sert.func(undefined));
    t.throws(() => Sert.func(42));
    t.throws(() => Sert.func('abc'));
    t.throws(() => Sert.func([]));
    t.throws(() => Sert.func({}));
});

test('.func throw error object with given props', t => {
    const err = t.throws(() => Sert.func(42, { message: 'Foo bar', status: 418 }));
    t.is(err.message, 'Foo bar');
    t.is(err.status, 418);
});

test('.func pass valid subjects', t => {
    Sert.func(function() {});
    Sert.func(() => null);
});


test('.array throw error for invalid subjects', t => {
    t.throws(() => Sert.array(null));
    t.throws(() => Sert.array(undefined));
    t.throws(() => Sert.array(42));
    t.throws(() => Sert.array({}));
    t.throws(() => Sert.array('abc'));
});

test('.array throw error object with given props', t => {
    const err = t.throws(() => Sert.array(42, { message: 'Foo bar', status: 418 }));
    t.is(err.message, 'Foo bar');
    t.is(err.status418);
});

test('.array pass valid subjects', t => {
    Sert.array([]);
});


test('.bool throw error for invalid subjects', t => {
    t.throws(() => Sert.bool(null));
    t.throws(() => Sert.bool(undefined));
    t.throws(() => Sert.bool(42));
    t.throws(() => Sert.bool('abc'));
    t.throws(() => Sert.bool({}));
    t.throws(() => Sert.bool([]));
});

test('.bool throw error object with given props', t => {
    const err = t.throws(() => Sert.bool(42, { message: 'Foo bar', status: 418 }));
    t.is(err.message, 'Foo bar');
    t.is(err.status, 418);
});

test('.bool pass valid subjects', t => {
    Sert.bool(true);
    Sert.bool(false);
});


// Comparison

test('.above throw error for invalid subjects', t => {
    t.throws(() => Sert.above(5, 3));
    t.throws(() => Sert.above(5, 5));
    t.throws(() => Sert.above(0, -1));
    t.throws(() => Sert.above(3, [1, 2, 3]));
    t.throws(() => Sert.above(4, [1, 2, 3]));
});

test('.above pass valid subjects', t => {
    Sert.above(5, 6);
    Sert.above(-1, 0);
    Sert.above(1, [1, 2, 3]);
    Sert.above(2, [1, 2, 3]);
});


test('.atLeast throw error for invalid subjects', t => {
    t.throws(() => Sert.atLeast(5, 4));
    t.throws(() => Sert.atLeast(-2, -4));
    t.throws(() => Sert.atLeast(4, [1, 2, 3]));
});

test('.atLeast pass valid subjects', t => {
    Sert.atLeast(5, 5);
    Sert.atLeast(5, 7);
    Sert.atLeast(0, 0);
    Sert.atLeast(3, [1, 2, 3]);
    Sert.atLeast(3, [1, 2, 3, 4]);
});


test('.below throw error for invalid subjects', t => {
    t.throws(() => Sert.below(5, 5));
    t.throws(() => Sert.below(5, 12));
    t.throws(() => Sert.below(-7, -5));
    t.throws(() => Sert.below(2, [1, 2, 3]));
    t.throws(() => Sert.below(3, [1, 2, 3]));
});

test('.below pass valid subjects', t => {
    Sert.below(5, 4);
    Sert.below(-2, -3);
    Sert.below(4, [1, 2, 3]);
});


test('.atMost throw error for invalid subjects', t => {
    t.throws(() => Sert.atMost(5, 6));
    t.throws(() => Sert.atMost(-2, -1));
    t.throws(() => Sert.atMost(2, [1, 2, 3]));

});

test('.atMost pass valid subjects', t => {
    Sert.atMost(5, 5);
    Sert.atMost(5, 3);
    Sert.atMost(-2, -2);
    Sert.atMost(3, [1, 2, 3]);
    Sert.atMost(4, [1, 2, 3]);
});

test('.equal throw error for invalid subjects', t => {
    t.throws(() => Sert.equal(1, 2));
    t.throws(() => Sert.equal('a', 'b'));
    t.throws(() => Sert.equal(0, '0'));
    t.throws(() => Sert.equal('', null));
    t.throws(() => Sert.equal({}, {}));
    t.throws(() => Sert.equal([], []));
    t.throws(() => Sert.equal(null, 'null'));
    t.throws(() => Sert.equal(undefined, null));
});

test('.equal throw error object with given props', t => {
    const err = t.throws(() => Sert.equal(42, 43, { message: 'Foo bar', status: 418 }));
    t.is(err.message, 'Foo bar');
    t.is(err.status, 418);
});

test('.equal pass valid subjects', t => {
    Sert.equal(42, 42);
    Sert.equal('abc', 'abc');
    Sert.equal(true, true);
    Sert.equal(false, false);
    Sert.equal(undefined, undefined);
    Sert.equal(null, null);
    const obj = {};
    Sert.equal(obj, obj);
});


test('.in throw error for elements not in list', t => {
    t.throws(() => Sert.in([1, 2, 3], 4));
    t.throws(() => Sert.in(['a', 'b'], 'c'));
    t.throws(() => Sert.in(['1', '2'], 2));
});

test('.in throw error object with given props', t => {
    const err = t.throws(() => Sert.in([1, 2], 3, { message: 'Foo bar', status: 418 }));
    t.is(err.message, 'Foo bar');
    t.is(err.status, 418);
});

test('.in pass values in list', t => {
    Sert.in([1, 2], 2);
    Sert.in(['a', 'b'], 'a');
});


test('.notIn throw error for elements not in list', t => {
    t.throws(() => Sert.notIn([1, 2, 3], 3));
    t.throws(() => Sert.notIn(['a', 'b'], 'b'));
});

test('.notIn throw error object with given props', t => {
    const err = t.throws(() => Sert.notIn([1, 2], 2, { message: 'Foo bar', status: 418 }));
    t.is(err.message, 'Foo bar');
    t.is(err.status, 418);
});

test('.notIn pass values in list', t => {
    Sert.notIn([1, 2], 3);
    Sert.notIn(['1', '2'], 2);
    Sert.notIn(['a', 'b'], 'c');
});


test('.empty throw error for elements not in list', t => {
    t.throws(() => Sert.empty({ foo: 'bar' }));
    t.throws(() => Sert.empty([0]));
    t.throws(() => Sert.empty(42));
});

test('.empty throw error object with given props', t => {
    const err = t.throws(() => Sert.empty(42, { message: 'Foo bar', status: 418 }));
    t.is(err.message, 'Foo bar');
    t.is(err.status, 418);
});

test('.empty pass values in list', t => {
    Sert.empty({});
    Sert.empty([]);
    Sert.empty(undefined);
    Sert.empty(null);
});


test('.notEmpty throw error for elements not in list', t => {
    t.throws(() => Sert.notEmpty({}));
    t.throws(() => Sert.notEmpty([]));
    t.throws(() => Sert.notEmpty(undefined));
    t.throws(() => Sert.notEmpty(null));
});

test('.notEmpty throw error object with given props', t => {
    const err = t.throws(() => Sert.notEmpty([], { message: 'Foo bar', status: 418 }));
    t.is(err.message, 'Foo bar');
    t.is(err.status, 418);
});

test('.notEmpty pass values in list', t => {
    Sert.notEmpty({ bar: 'FOO' });
    Sert.notEmpty(['a', 'b', 'c']);
    Sert.notEmpty(42);
    Sert.notEmpty('abc');
});
