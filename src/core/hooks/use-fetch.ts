import { useState, useEffect, useDebugValue } from 'react';
import { ResponseModel } from '../models/Response';

const useFetch = (url: string) => {
    const [data, setData] = useState<ResponseModel>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<any | undefined>();

    const getData = async (url: string, abortController: AbortController) => {
        try {
            const response = await fetch(url, {
                signal: abortController.signal,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });
            const data = await response.json();
            const responseModel: ResponseModel = data;
            setIsLoading(false);
            setData(responseModel);
            setError(undefined);
        } catch (err) {
            const error = err as Error;
            setIsLoading(false);
            if (error.name !== 'AbortError') {
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