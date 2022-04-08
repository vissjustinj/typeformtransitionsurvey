import './App.css';
import React, { useState } from 'react';
import Document from './Document';
import Typeform from './Typeform';
import GetStarted from './GetStarted';
function App() {
	const [ start, setStart ] = useState(false);

	const getStarted = () => {
		setStart(true);
	};

	if (start === false) {
		return <GetStarted onStart={getStarted} />;
	}

	return (
		<div>
			<div>
				<h1 style={{ textAlign: 'center', padding: '10px' }}>
					Transitions Survey{' '}
					<button
						style={{ fontSize: 'medium' }}
						onClick={() => {
							window.location.reload(false);
						}}
					>
						Reload Page
					</button>
				</h1>
			</div>
			<div className="App">
				<div className="ui grid" style={{ height: '100%' }}>
					<div className="eight wide column">
						<div className="ui raised segment" style={{ height: '100%' }}>
							<Typeform style={{ height: '100%' }} />
						</div>
					</div>
					<div className="eight wide column">
						<div className="ui raised segment" style={{ height: '100%' }}>
							<Document />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
