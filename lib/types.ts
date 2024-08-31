export interface Config {
    onUpdate?: {
        (deltaTime: number, now: DOMHighResTimeStamp): void;
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
