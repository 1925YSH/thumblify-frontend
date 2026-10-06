import { SignUp } from "@clerk/react";
import Layout from "../components/Layout";

const Signup = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center pt-20 pb-12">
        <SignUp signInUrl="/login" fallbackRedirectUrl="/generate" routing="path" path="/signup" />
      </div>
    </Layout>
  );
};

export default Signup;
