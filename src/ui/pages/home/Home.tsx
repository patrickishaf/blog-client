// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import useFetch from "../../../core/hooks/use-fetch";
// import useHttpRequest from "../../../core/hooks/use-http-request";
// import SERVER_URL from "../../../core/utils/config";
// import RouteNames from "../../../core/utils/route-names";
// import Feed from "../../organisms/feed/Feed";
import NavDrawer from "../../organisms/navdrawer/NavDrawer";

export default function Home() {

    return (
        <main className="row">
            <NavDrawer />
            {/* <Feed/> */}
        </main>
    )

    // const [ homeState, setHomeState ] = useState<'LOADING' | 'AUTHENTICATED' | 'UNRECOGNIZED'>('LOADING');
    // const { data, isLoading, error} = useHttpRequest(SERVER_URL);
    // const navigateTo = useNavigate();

    // useEffect(() => {
    //     console.log('The data from the authstate endpoint is:', data);
    //     if (data?.type === 'error') {
    //         setHomeState('UNRECOGNIZED');
    //         navigateTo(RouteNames.LOGIN);
    //     }
    //     if (data?.type === 'success') {
    //         setHomeState('AUTHENTICATED');
    //     }
    // }, [data]);

    // return homeState === 'AUTHENTICATED' ? (
    //     <main className="row">
    //         <NavDrawer />
    //         {/* <Feed/> */}
    //     </main>
    // ) : (
    //     <div>LOADING....</div>
    // );
}