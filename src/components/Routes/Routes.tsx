import React from "react";
import {Route, Switch} from "react-router-dom";
import Error404 from '../../features/Error404/Error404';
import {ForgotPassword} from "../../features/password/ForgotPassword/ForgotPassword";
import {NewPassword} from "../../features/password/NewPassword/NewPassword";
import {Registration} from "../../features/Registration/Registration";
import {TestComponents} from "../../features/TestComponents/TestComponents";
import LoginContainer from "../../features/Login/LoginContainer";
import ProfileContainer from "../../features/Profile/ProfileContainer";

export const PATH = {
  PROFILE: "/profile",
  REGISTRATION: "/registration",
  LOGIN: "/login",
  NEWPASSWORD: "/new-password",
  FORGOTPASSWORD: "/forgot-password",
  TESTCOMPONENTS: "/test-components"
}

function Routes() {
  return (
    <>
      {/*Switch выбирает первый подходящий роут*/}
      <Switch>
        <Route path={PATH.LOGIN} render={() => <LoginContainer />} />
        <Route path={PATH.REGISTRATION} render={() => <Registration />} />
        <Route path={PATH.PROFILE} render={() => <ProfileContainer />} />
        <Route path={PATH.NEWPASSWORD} render={() => <NewPassword />} />
        <Route path={PATH.FORGOTPASSWORD} render={() => <ForgotPassword />} />
        <Route path={PATH.TESTCOMPONENTS} render={() => <TestComponents />} />

        {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
        <Route render={() => <Error404 />} />
      </Switch>
    </>
  );
}

export default Routes;
