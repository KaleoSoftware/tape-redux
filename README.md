tape-redux
==========

Write [tape](https://github.com/substack/tape) tests for redux blazingly fast.

```js
npm install --save-dev tape-redux
```

```js
test('app reducer openMenu', reducerTest(
    app,                                                     // Reducer
    {menuOpen: false},                                       // Initial state
    actions.openMenu,                                        // Action
    {menuOpen: true},                                        // Final state
    'openMenu should change the menuOpen property to true'   // Description
))
```

## Why tape instead of mocha?

[Boom.](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4#.grafh7q7s)

## Motivation

[Dan Abramov](https://github.com/gaearon/)'s *amazing* [egghead tutorial](https://egghead.io/series/getting-started-with-redux) on Redux showed us how to write tests for redux.

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
		stateAfter,
		'openMenu should change the menuOpen property to true'
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
	{menuOpen: true},
	'openMenu should change the menuOpen property to true'
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
		actions.openMenu,
		{type: types.OPEN_MENU},
		'openMenu() should have OPEN_MENU as type'
	)
	t.end()
})
```

and here's that same action test in tape-redux:

```js
import test from 'tape-catch'
import {actionTest} from 'tape-redux'

import * as types from '../../src/constants/ActionTypes'
import * as actions from '../../src/actions/app'

test('app action openMenu', actionTest(
	actions.openMenu,
	{type: types.OPEN_MENU},
	'openMenu() should have OPEN_MENU as type'
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
	stateAfter[,
	'description']
))
```

*Note the name for the test is just a convention.

Action tests:

```js
test('GROUP_NAME action ACTION_NAME', actionTest(
	actionCreator,
	action[,
	'description']
))
```

if you have an action creator that accepts an argument, use [.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind):

```js
test('GROUP_NAME action ACTION_NAME', actionTest(
	actionCreator.bind(null, argument),
	action[,
	'description']
))
```

##Thanks!! :)

##License
MIT
