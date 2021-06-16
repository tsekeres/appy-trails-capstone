import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Trips from '../views/Trips';
import TripPlanner from '../views/TripPlanner';
import Resources from '../views/Resources';
import SingleTrip from '../views/SingleTrip';

const PrivateRoute = ({
  component: Component, user, admin, ...rest
}) => {
  const routeChecker = (taco) => (admin || user
    ? (<Component {...taco} admin={admin} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any,
  admin: PropTypes.any,
};

function Routes({
  user, admin
}) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route
          exact
          path="/trips"
          user={user}
          admin={admin}
          component={() => (
            <Trips
              user={user}
              admin={admin}
            />
          )}
        />
        <Route
          exact
          path="/trips/:firebaseKey"
          component={SingleTrip}
        />
        <PrivateRoute
          exact
          path="/trip-planner"
          user={user}
          admin={admin}
          component={() => (
            <TripPlanner
              user={user}
              admin={admin}
            />
          )}
        />
        <Route
          exact
          path="/resources"
          admin={admin}
          component={() => (
            <Resources
              admin={admin}
            />
          )}
        />
        {/* <Route path="*" component={Home} /> */}
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  admin: PropTypes.any,
};

export default Routes;
