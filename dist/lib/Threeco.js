import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import useThreeco from './hooks/useThreeco';
const Threeco = ({ setup, context, isRunning, children }) => {
    const args = Array.isArray(context)
        ? context
        : [context];
    const { setRunning } = useThreeco(setup, ...args);
    useEffect(() => {
        if (isRunning !== undefined)
            setRunning(isRunning);
    }, [isRunning]);
    return (_jsx(_Fragment, { children: children }));
};
export default Threeco;
