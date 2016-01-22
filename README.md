tape-redux
==========

Write [tape](https://github.com/substack/tape) tests for redux blazingly fast.

```js
npm install --save-dev tape-redux
```

## Why tape instead of mocha?

[Boom.](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4#.grafh7q7s)

## Motivation

[Dan Abramov](https://github.com/gaearon/)'s *amazing* egghead tutorial on Redux showed us how to write tests for redux.

But writing those tests over and over can get cumbersome.

Here's a standard reducer test in tape for opening the app menu:

```js
import test from 'tape'
import deepFreeze from 'deep-freeze'

import app from '../../src/reducers/app'
import * as actions from '../../src/actions/app'

test('app reducer openMenu', (t) => {
	const stateBefore = {
		menuOpen: false
	}
	const stateAfter = {
		menuOpen: true
	}

	deepFreeze(stateBefore)
	deepFreeze(stateAfter)

	t.deepEqual(
		app(stateBefore, actions.openMenu()),
		stateAfter
	)

	t.end()
}
```

And here's that same test in tape-redux:

```js
import test from 'tape'
import {reducerTest} from 'tape-redux'

import app from '../../src/reducers/app'
import * as actions from '../../src/actions/app'

test('app reducer openMenu', reducerTest(
	app,
	{menuOpen: false},
	actions.openMenu,
	{menuOpen: true}
))
```

Compounded over time, the time/typing savings are incredible.

Here's an action test in plain-old tape:

```js
import test from 'tape-catch'

import * as types from '../../src/constants/ActionTypes'
import * as actions from '../../src/actions/app'

test('app action openMenu', (t) => {
	t.deepEqual(
		actions.openMenu, {type: types.OPEN_MENU}
	)
	t.end()
})
```

and here's that same action test in redux-tape:

```js
import test from 'tape-catch'
import {actionTest} from 'tape-redux'

import * as types from '../../src/constants/ActionTypes'
import * as actions from '../../src/actions/app'

test('app action openMenu', actionTest(
	actions.openMenu, {type: types.OPEN_MENU}
))
```

Granted, the savings for actionTest aren't as profound, but over many tests, it makes writing and reading tests much faster.

##Composition

Reducer tests:

```js
test('REDUCER_NAME reducer ACTION_NAME', reducerTest(
	reducer,
	stateBefore,
	action,
	stateAfter
))
```

*Note the name for the test is just a convention.

Action tests:

```js
test('GROUP_NAME action ACTION_NAME', actionTest(
	actionCreator,
	action
))
```

if you have an action creator that accepts an argument:

```js
test('GROUP_NAME action ACTION_NAME', actionTest(
	actionCreator.bind(this, argument),
	action
))
```

##Thanks!! :)

##License
MIT
