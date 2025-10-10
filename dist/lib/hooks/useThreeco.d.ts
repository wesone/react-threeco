import type { SetupFn } from '../types';
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
declare const useThreeco: (setup: SetupFn, ...context: unknown[]) => useThreeco;
export default useThreeco;
