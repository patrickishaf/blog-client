import Feed from "../../organisms/feed/Feed";
import NavDrawer from "../../organisms/navdrawer/NavDrawer";

export default function Home() {
    return (
        <main className="row">
            <NavDrawer />
            <Feed/>
        </main>
    )
}