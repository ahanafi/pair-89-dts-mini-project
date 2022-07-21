import { Routes, Route } from 'react-router-dom';
import Login from '../Components/Auth/Login';

const AuthRoutes = () => {
    return (
        <>
            {' '}
            <Routes>
                <Route path="/login" element={<Login />} exact />
            </Routes>
        </>
    )
}

export default AuthRoutes;