import { connect } from 'react-redux'

// Use named export for unconnected component (for tests)
export class App extends Component {
	/* ... */
}

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(App);

// you can have two exports for testing

