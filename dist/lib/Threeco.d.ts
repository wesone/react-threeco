import { FC, ReactNode } from 'react';
import { SetupFn } from './types';
declare type Props = {
    setup: SetupFn;
    context?: unknown;
    isRunning?: boolean;
    children?: ReactNode;
};
declare const Threeco: FC<Props>;
export default Threeco;
