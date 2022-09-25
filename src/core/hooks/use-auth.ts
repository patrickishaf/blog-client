import SERVER_URL from "../utils/config";
import useHttpRequest from "./use-http-request";

export default function useAuth() {
    return useHttpRequest(SERVER_URL);
}