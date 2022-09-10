import {FC, ReactNode} from 'react';
import {SetupFn} from './types';

import {useEffect} from 'react';
import useThreeco from './hooks/useThreeco';

type Props = {
    setup: SetupFn;
    context?: unknown;
    isRunning?: boolean;
    children?: ReactNode;
}

const Threeco: FC<Props> = ({setup, context, isRunning, children}) => {
    const args = Array.isArray(context)
        ? context 
        : [context];
    const {setRunning} = useThreeco(setup, ...args);

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
