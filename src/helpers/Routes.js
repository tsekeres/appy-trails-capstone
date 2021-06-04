import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, user, admin, ...rest }) => {
  const routeChecker = (taco) =>
    (admin || user
      ? (<Component {...taco} admin={admin} user={user} />)
      : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any,
  setUser: PropTypes.func,
  admin: PropTypes.any,
  setAdmin: PropTypes.func,
};

function Routes({
  user, setUser, admin, setAdmin
}) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/trips"
          user={user}
          component={() => (
            <Trips user={user} />
          )}
        />
        <PrivateRoute
          exact
          path="/"
          user={user}
          component={() => <ViewNAme user={user} />}
        />
        <Route path="*" component={Home} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
};

export default Routes;
