import React from 'react';
import UserManagement from "../pages/UserManagement"

//TODO
//? Donde debería guardar este componente?

const PrivateRoute = ({ children, isAuthenticated, setIsAuthenticated }) => {
    return isAuthenticated ? children : <UserManagement setIsAuthenticated={setIsAuthenticated}/>;
}


export default PrivateRoute;


