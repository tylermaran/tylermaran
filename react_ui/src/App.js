// Importing Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importing Components
import Landing from './pages/Landing';


const App = () => {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path='/' component={Landing}/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
