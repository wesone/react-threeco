import './App.css';

import {useRef} from 'react';
import {useThreeco} from 'react-threeco';
import init from './threeco/init';

const App = () => {
    const canvasWrapRef = useRef();

    const {setRunning, isRunning} = useThreeco(init, canvasWrapRef);
    const toggleRunning = () => setRunning(!isRunning);

    return (
        <div className="App">
            <div ref={canvasWrapRef}></div>
            <div className="options">
                <button onClick={toggleRunning}>{isRunning ? 'Pause' : 'Run'}</button>
            </div>
        </div>
    );
};

export default App;
