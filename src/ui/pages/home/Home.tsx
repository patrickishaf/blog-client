import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../core/hooks/use-fetch"
import SERVER_URL from "../../../core/utils/config";
import RouteNames from "../../../core/utils/route-names";
import Feed from "../../organisms/feed/Feed";
import NavDrawer from "../../organisms/navdrawer/NavDrawer";

export default function Home() {
    const { data, isLoading, error } = useFetch(`${SERVER_URL}/auth/authstate`);
    const navigateTo = useNavigate();

    useEffect(() => {
        if (error) {
            navigateTo(RouteNames.LOGIN);
        }
    }, [data, error, navigateTo]);

    return (
        <main className="row">
            <NavDrawer />
            {
                isLoading
                    ? <p className="white-text">Loading...</p> 
                    : error 
                        ? <p className="white-text">Unable to log in</p>
                        :  (<Feed/>)

            }
        </main>
    )
}