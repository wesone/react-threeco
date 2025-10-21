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
declare const useThreeco: <Context extends unknown[] = never[]>(setup: SetupFn<Context>, ...context: Context) => useThreeco;
export default useThreeco;
