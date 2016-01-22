import deepFreeze from 'deep-freeze'

export default (reducer, stateBefore, action, stateAfter) => (
	(t) => {
		deepFreeze(stateBefore)
		deepFreeze(stateAfter)

		t.deepEqual(
			reducer(stateBefore, action()),
			stateAfter
		)

		t.end()
	}
)
