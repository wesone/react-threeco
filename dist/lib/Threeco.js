import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import useThreeco from './hooks/useThreeco';
const Threeco = (props) => {
    const { setup, isRunning, children } = props;
    const context = 'context' in props ? props.context : [];
    const { setRunning } = useThreeco(setup, ...context);
    useEffect(() => {
        if (isRunning !== undefined)
            setRunning(isRunning);
    }, [isRunning]);
    return (_jsx(_Fragment, { children: children }));
};
export default Threeco;
