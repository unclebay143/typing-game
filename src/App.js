import "./App.css";
import { Homepage } from "./components/homepage/Homepage";
import { Route, Switch } from "react-router";
import { pageurl } from "./components/pageurl";
import { Registration } from "./components/authentication/register/Registration";
import { Login } from "./components/authentication/login/Login";
import { ForgotPassword } from "./components/authentication/forgot-password/ForgotPassword";
import { GameArea } from "./components/game/gamearea/GameArea";
import { Welcome } from "./components/confirmation/welcome/Welcome";
import { PasswordConfirmation } from "./components/confirmation/passwordConfirmation/PasswordConfirmation";
import { PopNotify } from "./components/layouts/notification/popnotify/PopNotify";

function App() {
  return (
    <div className="App">
      {/* NOTIFICATION COMPONENT */}
      <PopNotify />

      <Switch>
        <Route exact path={pageurl.HOMEPAGE} component={Homepage} />
        <Route exact path={pageurl.REGISTER} component={Registration} />
        <Route exact path={pageurl.LOGIN} component={Login} />
        <Route exact path={pageurl.WELCOME_ONBOARD} component={Welcome} />
        <Route
          exact
          path={pageurl.FORGOT_PASSWORD_CONFIRMATION}
          component={PasswordConfirmation}
        />
        <Route
          exact
          path={pageurl.FORGOT_PASSWORD}
          component={ForgotPassword}
        />
        <Route path={pageurl.DASHBOARD} component={GameArea} />
      </Switch>
    </div>
  );
}

export default App;
