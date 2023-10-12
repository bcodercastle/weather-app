import { IProtectedRoute } from "models/general/ProtectedRouteModel";
import { Navigate, Outlet } from "react-router-dom";
import { Paths } from "constants/index";

const ProtectedRoute = ({
  isRouteAccessible = false,
  redirectRoute = Paths.ROOT,
}: IProtectedRoute): JSX.Element => {
  return isRouteAccessible ? (
    <Outlet />
  ) : (
    <Navigate to={redirectRoute} replace />
  );
};

export default ProtectedRoute;
