import { useState, useEffect, useDebugValue } from "react";
import { HttpMethod } from "../@types";
import { ResponseModel } from "../models/Response";

const useHttpRequest = (url: string, options?: {
    method?: HttpMethod,
    headers?: object,
    body?: object,
 }) => {
    const [data, setData] = useState<ResponseModel>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<any | undefined>();

    const sendHttpRequest = async (url: string, abortController: AbortController) => {
        try {
            const response = await fetch(url, {
                signal: abortController.signal,
                method: options?.method || 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                    ...options?.headers
                },
                body: JSON.stringify(options?.body) || null,
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
        sendHttpRequest(url, abortController);
    }, [url, options]);

    useDebugValue(data);
    useDebugValue(isLoading);
    useDebugValue(error ?? 'no error yet');

    return { data, isLoading, error };
}

export default useHttpRequest;