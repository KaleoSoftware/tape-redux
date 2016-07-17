import deepFreeze from 'deep-freeze'

export default (reducer, stateBefore, action, stateAfter, description) => (
	(t) => {
		deepFreeze(stateBefore)
		deepFreeze(action)

		t.deepEqual(
			reducer(stateBefore, action()),
			stateAfter,
			description
		)

		t.end()
	}
)
