export interface Config {
    onUpdate?: {
        (deltaTime: number): void;
    };
    onRender: {
        (): void;
    };
    onUnmount?: {
        (): void;
    };
    autorun?: boolean;
}
export declare type SetupFn = {
    (...context: unknown[]): Config;
};
