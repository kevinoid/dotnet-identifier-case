/**
 * @copyright Copyright 2016-2024 Kevin Locke <kevin@kevinlocke.name>
 * @license MIT
 */

import assert from 'node:assert/strict';
import { format } from 'node:util';

import dotnetIdentifierCase from '../index.js';

function itTransforms(from, to) {
  it(format('transforms %j to %j', from, to), () => {
    assert.equal(dotnetIdentifierCase(from), to);
  });
}

describe('dotnetIdentifierCase', () => {
  itTransforms('', '');
  itTransforms(undefined, 'Undefined');
  itTransforms(1, '1');
  itTransforms('foo', 'Foo');
  itTransforms('Foo', 'Foo');
  itTransforms('fOo', 'FOo');
  itTransforms('FOO', 'Foo');
  itTransforms(' foo ', 'Foo');
  itTransforms('_foo_', 'Foo');
  itTransforms('foo bar', 'FooBar');
  itTransforms('foo_bar', 'FooBar');
  itTransforms('foo.bar', 'FooBar');
  itTransforms('foo-bar', 'FooBar');
  itTransforms('fooBar', 'FooBar');
  itTransforms("foo's", 'Foos');
  itTransforms('fooV2', 'FooV2');
  itTransforms('foo XVII', 'FooXVII');
  itTransforms('foo IVY', 'FooIvy');
});
