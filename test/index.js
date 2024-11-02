/**
 * @copyright Copyright 2016-2024 Kevin Locke <kevin@kevinlocke.name>
 * @license MIT
 */

import assert from 'node:assert/strict';

import dotnetIdentifierCase from '../index.js';

describe('dotnetIdentifierCase', () => {
  it('returns empty string unchanged', () => {
    assert.equal(dotnetIdentifierCase(''), '');
  });

  it('converts undefined to "Undefined"', () => {
    assert.equal(dotnetIdentifierCase(), 'Undefined');
  });

  it('converts 1 to "1"', () => {
    assert.equal(dotnetIdentifierCase(1), '1');
  });

  it('converts "foo" to "foo"', () => {
    assert.equal(dotnetIdentifierCase('foo'), 'Foo');
  });

  it('converts "Foo" to "foo"', () => {
    assert.equal(dotnetIdentifierCase('Foo'), 'Foo');
  });

  it('converts "fOo" to "foo"', () => {
    assert.equal(dotnetIdentifierCase('fOo'), 'FOo');
  });

  it('converts "FOO" to "foo"', () => {
    assert.equal(dotnetIdentifierCase('FOO'), 'Foo');
  });

  it('converts "foo bar" to "FooBar"', () => {
    assert.equal(dotnetIdentifierCase('foo bar'), 'FooBar');
  });
});
