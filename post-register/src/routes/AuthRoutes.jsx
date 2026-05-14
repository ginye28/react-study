import { Route, Routes } from "react-router";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import Signup from "../pages/Signup/Signup";
import Signin from "../pages/Signin/Signin";

function AuthRoutes() {

    return (
        <AuthLayout>
            <Routes>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/signin" element={<Signin/>}/>
            </Routes>
        </AuthLayout>
    )
}

export default AuthRoutes;