import {Redirect, RouteProps} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Route as ReactRoute } from 'react-router-dom';

interface RoutesProps extends RouteProps {
  component: React.ComponentType;
  isPrivate?: boolean;
  isSigned?: boolean;
}

function Route({ component: Component, isPrivate, ...res }: RoutesProps) {
  const { signed } = useAuth();

  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />
  }

  return (
    <ReactRoute
      {...res}
      render={() => {
        return (
          <Component />
        );
      }}
    />
  );
}

export default Route;