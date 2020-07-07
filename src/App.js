import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Infopanel from './components/Infopanel';
import FootNav from './components/FootNav'

function App() {
	const screenConfig = useState(0);

  return (
	<div>
		<Navbar />
		<Infopanel currentScreen={screenConfig[0]}/>
		<FootNav screenConfig={screenConfig}/>
	</div>
  );
}

export default App;