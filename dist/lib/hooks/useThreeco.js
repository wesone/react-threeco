import { useEffect, useRef, useState } from 'react';
const useThreeco = (setup, ...context) => {
    const frameId = useRef(null);
    const lastTime = useRef(window.performance.now());
    const animateRef = useRef();
    const [isRunning, setRunning] = useState(false);
    const pause = () => {
        if (!frameId.current)
            return;
        cancelAnimationFrame(frameId.current);
        frameId.current = null;
        setRunning(false);
    };
    const run = () => {
        var _a;
        pause();
        const now = window.performance.now();
        lastTime.current = now; // reset last timestamp otherwise pausing would feel like a massive lag
        (_a = animateRef.current) === null || _a === void 0 ? void 0 : _a.call(animateRef, now);
        setRunning(true);
    };
    useEffect(() => {
        const { onUpdate, onRender, onUnmount, autorun } = setup(...context);
        const animate = (timestamp) => {
            frameId.current = window.requestAnimationFrame(animate);
            const deltaTime = (timestamp - lastTime.current) / 1000;
            lastTime.current = timestamp;
            onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(deltaTime, timestamp);
            onRender();
        };
        animateRef.current = animate;
        if (onUpdate !== undefined && autorun !== false)
            run();
        else
            onRender();
        return () => {
            pause();
            onUnmount === null || onUnmount === void 0 ? void 0 : onUnmount();
        };
    }, []);
    return {
        run,
        pause,
        setRunning: (running) => {
            if (running)
                return run();
            pause();
        },
        isRunning
    };
};
export default useThreeco;
