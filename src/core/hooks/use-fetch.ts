import { useState, useEffect, useDebugValue } from 'react';

const useFetch = (url: string) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const abortController = new AbortController();
        setIsLoading(true);
        fetch(url, {signal: abortController.signal}).then((result) => {
            console.log('THE RESPONSE IS:', result);
            result.json();
        }).then((result) => {
            console.log('THE RESPONSE TO JSON IS:', result);
            //setData(result);
            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
            if(err.name === 'AbortError') {
                console.log('Fetch aborted');
            } else {
                setIsLoading(false);
                setError(err);
            }
        });
    }, [url]);

    useDebugValue(data);
    useDebugValue(isLoading);
    useDebugValue(error ?? 'no error yet');

    return { data, isLoading, error };
}

export default useFetch;