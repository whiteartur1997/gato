import {useSelector} from "react-redux";
import {AppRootStateType} from "../app/store";
import {Redirect} from "react-router-dom";

const RedirectToLogin = (Component: any) => {

    let authMe = useSelector<AppRootStateType, boolean>(state => state.auth.authMe)

    if (!authMe) return <Redirect to={'/login'}/>
    return <Component/>
}

export default RedirectToLogin