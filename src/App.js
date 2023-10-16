import React from 'react';

import PopUp from './components/PopUp.js';
import './App.css';

const App = () => {

	return (
		<div className='main'>
			<PopUp>
				<div>child 1</div>
				<div>child 2</div>
				<div>child 3</div>
			</PopUp>

		</div>
	);
}

export default App;