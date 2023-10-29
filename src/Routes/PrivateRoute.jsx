import { useContext } from "react";
import PropTypes from 'prop-types';
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        <progress className="progress w-56"></progress>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to="/login" replace></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;