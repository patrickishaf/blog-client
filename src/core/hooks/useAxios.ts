import { useEffect, useState } from "react";
import { ResponseModel } from "../models/Response";

const useAxios = () => {
    const [data, setData] = useState<ResponseModel>();
    const [isLoading, setIsLoading] = useState<boolean>();
    const [error, setError] = useState<any | undefined>();
}

export default useAxios;