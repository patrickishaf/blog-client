import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        const abortController = new AbortController();
        setIsLoading(true);
        fetch(url, {signal: abortController.signal}).then((result) => {
            setData(result);
            setIsLoading(false)
        }).catch((err) => {
            setIsLoading(false);
            if(err.name === 'AbortError') {
                console.log('Fetch aborted');
            } else {
                setIsLoading(false)
                setError(err);
            }
        });
    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;