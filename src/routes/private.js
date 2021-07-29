import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  //   const { auth } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === false ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/",
            }}
          />
        );
      }}
    />
  );
};

export default Route;
