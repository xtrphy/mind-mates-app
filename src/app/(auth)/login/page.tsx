import LoginForm from "@/components/custom-components/LoginForm";
import { Suspense } from "react";

const LoginPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
        </Suspense>
    );
};

export default LoginPage;