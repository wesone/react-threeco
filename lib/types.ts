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

export type SetupFn = {
    (...context: unknown[]): Config;
}
