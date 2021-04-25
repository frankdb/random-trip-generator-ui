import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import ContainerLayout from "../components/layout/ContentLayout";
import Login from "../components/forms/Login";
import Link from "next/link";
import { useAuth } from "../hooks/use-auth";
import { useRouter } from "next/router";

interface LoginFormData {
  email: string;
  password: string;
}

const signup = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("Auth===", auth);
  }, [auth]);

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    const res = await auth.login(email, password);
    console.log("RES======", res);
    if (res) {
      router.push("/onboarding");
    }
  };

  return (
    <Layout>
      <ContainerLayout>
        <div className="p-4 text-center">
          <h2 className="text-2xl font-bold">Login</h2>
          <p>
            Don't have an account?{" "}
            <span className="pointer">
              <Link href="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
        <Login
          formData={formData}
          handleFormData={handleFormData}
          handleSubmit={handleSubmit}
        />
      </ContainerLayout>
    </Layout>
  );
};

export default signup;
