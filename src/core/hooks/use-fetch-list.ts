import { useState, useEffect, useDebugValue } from 'react';

const useFetchList = (url: string) => {
    const [data, setData] = useState<[any]>();
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
            console.log('RESPONSE IN USE_FETCH_LIST', response);
            const data = await response.json();
            console.log('DATA IN USE_FETCH_LIST:', data);
            setIsLoading(false);
            setData(data.body);
            setError(undefined);
        } catch (err) {
            const error = err as Error;
            console.log('ERROR IN USE FETCH:', error);
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

export default useFetchList;