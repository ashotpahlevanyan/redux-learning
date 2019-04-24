// npm install --save-dev jest
// To use it together with Babel, you will need to install babel-jest:

// npm install --save-dev babel-jest
// and configure it to use babel-preset-env features in .babelrc:

// {
// 	"presets": ["@babel/preset-env"]
// }

// { // package.json
// 	"scripts": {
// 		"test": "jest",
// 			"test:watch": "npm test -- --watch"
// 	}
// }

// For components testing use enzyme

//npm install --save-dev enzyme
// need to add corresponding adapter
// npm install --save-dev enzyme-adapter-react-16

// we make setup() helper that passes the stubbed callbacks
// as props and renders the component with shallow rendering.
// This lets individual tests assert on whether
// the callbacks were called when expected.


