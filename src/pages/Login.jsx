import { SignIn } from "@clerk/react";
import Layout from "../components/Layout";

const Login = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center pt-20 pb-12">
        <SignIn signUpUrl="/signup" fallbackRedirectUrl="/generate" routing="path" path="/login" />
      </div>
    </Layout>
  );
};

export default Login;
