import Header from './components/header';
import Three from './components/three';
import Footer from './components/footer';
import Legacy from './components/legacy';
import { useState } from 'react';

function App() {
	function showLegacy() {
    	toggle(!legacy);
  	}
    const[legacy, toggle] = useState(false);
    return (
        <>
            <Header legacy={legacy} callback={showLegacy} />
			{legacy ? <Legacy /> : <Three />}
            <Footer legacy={legacy} />
        </>
    )
}

export default App;
