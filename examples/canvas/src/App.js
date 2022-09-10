import './App.css';

import {useState} from 'react';
import {Threeco} from 'react-threeco';
import init from './threeco/init';

const App = () => {
    const [isRunning, setRunning] = useState(true);
    const toggleRunning = () => setRunning(!isRunning);

    return (
        <div className="App">
            <Threeco setup={init} isRunning={isRunning}>
                <div className="options">
                    <button onClick={toggleRunning}>{isRunning ? 'Pause' : 'Run'}</button>
                </div>
            </Threeco>
        </div>
    );
};

export default App;
