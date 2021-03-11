import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../components/Routes/Routes";
import Profile from "./Profile";
import {AuthMeType, getAuth, logout} from "../../app/reducers/auth-reducer";

const ProfileContainer = () => {

    const isLoggedIn = useSelector<AppRootStateType, AuthMeType>(state => state.auth.authMe);
    const {name, avatar, publicCards, created} = useSelector((state: AppRootStateType) => state.profile)

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAuth())
    }, [dispatch])

    if (isLoggedIn === "unauthorized") {
        return <Redirect to={PATH.LOGIN}/>
    }

    const onLogoutHandler = () => {
        dispatch(logout())

    }

    return <Profile
        onLogoutHandler={onLogoutHandler}
        name={name}
        avatar={avatar}
        created={created}
        publicCards={publicCards}
    />
}


export default React.memo(ProfileContainer)