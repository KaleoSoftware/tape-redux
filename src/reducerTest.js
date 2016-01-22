import deepFreeze from 'deep-freeze'

export default (reducer, stateBefore, action, stateAfter, description) => (
	(t) => {
		deepFreeze(stateBefore)
		deepFreeze(stateAfter)

		t.deepEqual(
			reducer(stateBefore, action()),
			stateAfter,
			description
		)

		t.end()
	}
)
