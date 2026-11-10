import { Outlet, useNavigate } from "react-router-dom";
import { useUser } from "./useUser";
import { useEffect } from "react";

function ProtectedRoute() {
  const navigate = useNavigate();

  const { userLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!userLoading && !isAuthenticated) navigate("/login");
  }, [userLoading, isAuthenticated, navigate]);

  if (isAuthenticated) return <Outlet />;
}

export default ProtectedRoute;
