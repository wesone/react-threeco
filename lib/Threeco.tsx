import type {ReactNode} from 'react';
import type {SetupFn} from './types';

import {useEffect} from 'react';
import useThreeco from './hooks/useThreeco';

type Props<Context extends unknown[] = never[]> = {
    setup: SetupFn<Context>;
    isRunning?: boolean;
    children?: ReactNode;
} & (
    Context extends never[]
        ? object
        : {
            context: Context;
        }
)

const Threeco = <Context extends unknown[] = never[]>(props: Props<Context>) => {
    const {setup, isRunning, children} = props;
    const context = 'context' in props ? props.context : [];
    const {setRunning} = useThreeco<[]>(setup, ...context as []);

    useEffect(() => {
        if(isRunning !== undefined)
            setRunning(isRunning);
    }, [isRunning]);

    return (
        <>
            {children}
        </>
    );
};

export default Threeco;
