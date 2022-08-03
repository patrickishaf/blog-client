import { useState, useEffect, useDebugValue } from 'react';

const useFetch = (url: string) => {
    const [data, setData] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<any | undefined>();

    const getData = async (url: string, abortController: AbortController) => {
        try {
            const response = await fetch(url, {
                signal: abortController.signal,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setIsLoading(false);
            setData(data);
            setError(undefined);
        } catch (err) {
            const error = err as Error;
            setIsLoading(false);
            if (error.name === 'AbortError') {
                console.log('Fetch aborted');
            } else {
                setError(error);
            }
        }
    }

    useEffect(() => {
        const abortController = new AbortController();
        getData(url, abortController);
    }, [url]);

    useDebugValue(data);
    useDebugValue(isLoading);
    useDebugValue(error ?? 'no error yet');

    return { data, isLoading, error };
}

export default useFetch;