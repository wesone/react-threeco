import type {SetupFn} from '../types';

import {useEffect, useRef, useState} from 'react';

interface useThreeco {
    run: {
        (): void;
    };
    pause: {
        (): void;
    };
    setRunning: {
        (running: boolean): void;
    };
    isRunning: boolean;
}

const useThreeco = (setup: SetupFn, ...context: unknown[]): useThreeco => {
    const frameId = useRef<number | null>(null);
    const lastTime = useRef<DOMHighResTimeStamp>(window.performance.now());
    const animateRef = useRef<(now: DOMHighResTimeStamp) => void>();
    const [isRunning, setRunning] = useState<boolean>(false);

    const pause = () => {
        if(!frameId.current)
            return;
        cancelAnimationFrame(frameId.current);
        frameId.current = null;

        setRunning(false);
    };

    const run = () => {
        pause();
        const now = window.performance.now();
        lastTime.current = now; // reset last timestamp otherwise pausing would feel like a massive lag
        animateRef.current?.(now);

        setRunning(true);
    };

    useEffect(() => {
        const {
            onUpdate,
            onRender,
            onUnmount,
            autorun
        } = setup(...context);

        const animate = (timestamp: DOMHighResTimeStamp) => {
            frameId.current = window.requestAnimationFrame(animate);
            const deltaTime = (timestamp - lastTime.current) / 1000;
            lastTime.current = timestamp;
            onUpdate?.(deltaTime, timestamp);
            onRender();
        };
        animateRef.current = animate;

        if(onUpdate !== undefined && autorun !== false)
            run();
        else
            onRender();

        return () => {
            pause();
            onUnmount?.();
        };
    }, []);

    return {
        run,
        pause,
        setRunning: (running: boolean) => {
            if(running)
                return run();
            pause();
        },
        isRunning
    };
};

export default useThreeco;
