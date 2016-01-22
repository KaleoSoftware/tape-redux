module.exports = {
	"rules": {
		"indent": [ 2, "tab" ],
		"quotes": [ 2, "single" ],
		"semi": [ 2, "never" ],
		"babel/generator-star-spacing": 1,
		"babel/new-cap": 0,
		"babel/object-shorthand": 1,
		"babel/arrow-parens": 1,
		"babel/no-await-in-loop": 1,
		"react/jsx-uses-react": 2,
		"react/jsx-uses-vars": 2,
		"react/react-in-jsx-scope": 2,
		"flow-vars/define-flow-type": 1,
		"flow-vars/use-flow-type": 1
	},
	"parser": "babel-eslint",
	"env": {
		"es6": true,
		"browser": true,
		"node": true
	},
	"extends": "eslint:recommended",
	"ecmaFeatures": {
		"jsx": true,
		"modules": true
	},
	"plugins": [
		"babel",
		"react",
		"flow-vars"
	]
};
