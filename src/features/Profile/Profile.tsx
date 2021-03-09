import classes from "./Profile.module.css";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../components/Routes/Routes";

const Profile = () => {

  const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.authMe);
  const {name, avatar, publicCards, created} = useSelector((state:AppRootStateType) => state.profile)
  const src = avatar || "https://img-16.ccm2.net/BtdjVGwSisLoejfsY0AB3ZKEZRg=/600x/883ba4dee45849ffbdecb3fbe8f3d0a2/ccm-faq/mona.gif";

  if(!isLoggedIn) {
    return <Redirect to={PATH.LOGIN} />
  }

  return <div className={classes.Profile}>
    <div className={classes.avatarWrapper}>
      <img
          alt="avatar"
          src={src} />
    </div>
    <div className={classes.infoWrapper}>
      <h1 className={classes.name}>{name}</h1>
      <p>Number of Public Cards: {publicCards}</p>
      <p>Account was created on: {String(created).substring(0,10)}</p>
    </div>
  </div>
}


export default Profile