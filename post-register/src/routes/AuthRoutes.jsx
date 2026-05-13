import { Route, Routes } from "react-router";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import Signup from "../pages/Signup/Signup";

function AuthRoutes() {

    return (
        <AuthLayout>
            <Routes>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/signin" element={<>로그인</>}/>
            </Routes>
        </AuthLayout>
    )
}

export default AuthRoutes;