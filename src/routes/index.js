import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import UserRegister from "../pages/UserRegister";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <h1>Hello Home</h1>} />
      <Route path="/register" component={UserRegister} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
