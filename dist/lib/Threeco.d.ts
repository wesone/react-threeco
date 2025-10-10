import type { FC, ReactNode } from 'react';
import type { SetupFn } from './types';
type Props = {
    setup: SetupFn;
    context?: unknown;
    isRunning?: boolean;
    children?: ReactNode;
};
declare const Threeco: FC<Props>;
export default Threeco;
