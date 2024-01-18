import { redirect } from "react-router-dom";

function NotFound() {
    redirect('/#' + window.location.pathname);
}

export default NotFound;