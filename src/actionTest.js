export default (actionCreator, action) => (
	(t) => {
		t.deepEqual(actionCreator(), action)
		t.end()
	}
)
