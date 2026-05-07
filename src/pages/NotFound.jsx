// Layout for when a user logs into the application
import { Outlet } from "react-router-dom";

export default function NotFound() {
    return(
        <>
            <h1>Page Not Found</h1>
            <Outlet />
        </>
    );
}