import classes from "./Profile.module.css";

type ProfilePropsType = {
    name: string | null
    publicCards: Date | null
    created: number | null
    avatar: string | null
    onLogoutHandler: () => void
}

const Profile = (props: ProfilePropsType) => {


    const src = props.avatar || "https://img-16.ccm2.net/BtdjVGwSisLoejfsY0AB3ZKEZRg=/600x/883ba4dee45849ffbdecb3fbe8f3d0a2/ccm-faq/mona.gif";

    return <div className={classes.Profile}>
        <div className={classes.avatarWrapper}>
            <img
                alt="avatar"
                src={src}/>
        </div>
        <div className={classes.infoWrapper}>
            <h1 className={classes.name}>{props.name}</h1>
            <p>Number of Public Cards: {props.publicCards}</p>
            <p>Account was created on: {String(props.created).substring(0, 10)}</p>
            <div className={classes.profile__logout} onClick={props.onLogoutHandler}><span>Logout ▶</span></div>
        </div>
    </div>
}


export default Profile