export default (actionCreator, action, description) => (
	(t) => {
		t.deepEqual(actionCreator(), action, description)
		t.end()
	}
)
