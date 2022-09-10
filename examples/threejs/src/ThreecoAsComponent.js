import {useRef, useState} from 'react';
import {Threeco} from 'react-threeco';
import init from './threeco/init';

const ThreecoAsComponent = () => {
    const canvasWrapRef = useRef();
    
    const [isRunning, setRunning] = useState(true);
    const toggleRunning = () => setRunning(!isRunning);

    return (
        <Threeco setup={init} isRunning={isRunning} context={canvasWrapRef}>
            <div ref={canvasWrapRef}></div>
            <div className="options">
                <button onClick={toggleRunning}>{isRunning ? 'Pause' : 'Run'}</button>
            </div>
        </Threeco>
    );
};

export default ThreecoAsComponent;
