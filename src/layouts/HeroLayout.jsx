// Layout for the hero pages aka the navbar to login register etc..
import { Outlet } from "react-router-dom";

export default function HeroLayout() {
    return(
        <>
            <h1>hi hero</h1>
            <Outlet />
        </>
    );
}