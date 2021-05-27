import './App.css';
import { Homepage } from './components/homepage/Homepage';
import { Route, Switch } from 'react-router';
import { pageurl } from './components/pageurl';
import { Registration } from './components/authentication/register/Registration';
import { Login } from './components/authentication/login/Login';
import { ForgotPassword } from './components/authentication/forgot-password/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={pageurl.HOMEPAGE} component={Homepage}/>
        <Route exact path={pageurl.LOGIN} component={Login}/>
        <Route exact path={pageurl.REGISTER} component={Registration}/>
        <Route exact path={pageurl.FORGOTPASSWORD} component={ForgotPassword}/>
      </Switch>
    </div>
  );
}

export default App;
