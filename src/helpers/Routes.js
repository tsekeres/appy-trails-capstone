import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Trips from '../views/Trips';
import TripPlanner from '../views/TripPlanner';
import Resources from '../views/Resources';

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
  user, admin, trips, setTrips, resources, setResources
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
              trips={trips}
              setTrips={setTrips}
            />
          )}
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
              trips={trips}
              setTrips={setTrips}
            />
          )}
        />
        <Route
          exact
          path="/resources"
          user={user}
          admin={admin}
          component={() => (
            <Resources
              user={user}
              admin={admin}
              resources={resources}
              setResources={setResources}
            />
          )}
        />
        <Route path="*" component={Home} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  admin: PropTypes.any,
  trips: PropTypes.array,
  setTrips: PropTypes.func,
  resources: PropTypes.array,
  setResources: PropTypes.func,
};

export default Routes;
