import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (taco) =>
    user ? (
      <Component {...taco} user={user} />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: taco.location } }} />
    );
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any,
};

function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" user={user} component={Home} />
        <PrivateRoute
          exact
          path="/"
          user={user}
          component={() => (
            <ViewName user={user} />
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
