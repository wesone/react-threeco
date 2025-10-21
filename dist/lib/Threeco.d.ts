import type { ReactNode } from 'react';
import type { SetupFn } from './types';
type Props<Context extends unknown[] = never[]> = {
    setup: SetupFn<Context>;
    isRunning?: boolean;
    children?: ReactNode;
} & (Context extends never[] ? object : {
    context: Context;
});
declare const Threeco: <Context extends unknown[] = never[]>(props: Props<Context>) => JSX.Element;
export default Threeco;
