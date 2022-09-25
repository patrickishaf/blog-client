import { ReactNode } from "react";
import useAuth from "../../core/hooks/use-auth"
import Login from "../pages/login/Login";

interface AuthGuardProps {
    children: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
    const { data, isLoading } = useAuth();

    return (
        <>
            {data?.type === 'success' ? {children} : isLoading ? <div>LOADING...</div> : <Login/>}
        </>
    )
}

export default AuthGuard;