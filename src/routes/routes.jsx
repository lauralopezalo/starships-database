import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from 'components/NavBar';
import PrivateRoute from './PrivateRoute';
import StarshipsList from '../pages/StarshipsList';
import StarshipDetails from '../pages/StarshipDetails';
import NotFound from 'pages/NotFound';

const Router = (props) => (

    <BrowserRouter>
        <Routes>

            <Route path="/" element={
                <PrivateRoute isAuthenticated={props.isAuthenticated} setIsAuthenticated={props.setIsAuthenticated}>
                    <NavBar isAuthenticated={props.isAuthenticated} setIsAuthenticated={props.setIsAuthenticated} />
                    <Home />
                </PrivateRoute>}
            />

            <Route path="/starships-list" element={
                <PrivateRoute isAuthenticated={props.isAuthenticated} setIsAuthenticated={props.setIsAuthenticated}>
                    <NavBar isAuthenticated={props.isAuthenticated} setIsAuthenticated={props.setIsAuthenticated} />
                    <StarshipsList />
                </PrivateRoute>}
            />

            <Route path="/starships/:name" element={
                <PrivateRoute isAuthenticated={props.isAuthenticated} setIsAuthenticated={props.setIsAuthenticated}>
                    <NavBar isAuthenticated={props.isAuthenticated} setIsAuthenticated={props.setIsAuthenticated} />
                    <StarshipDetails />
                </PrivateRoute>}
            />

            <Route path="*" element={<NotFound />} />

        </Routes>
    </BrowserRouter >
);

export default Router;