import React from "react"
import Header from "./Header"
import {useDispatch, useSelector} from "react-redux";
import { logout } from "../../app/reducers/auth-reducer";
import {AppRootStateType} from "../../app/store";

export const HeaderContainer = () => {
  let dispatch = useDispatch()
  let authMe = useSelector<AppRootStateType, boolean>(state => state.auth.authMe)

    const onLogoutHandler = () => {
      dispatch(logout())

    }

    return <Header
        authMe={authMe}
        onLogoutHandler={onLogoutHandler}
    />
}